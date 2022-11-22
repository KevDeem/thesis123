import React, {useEffect, useState, useRef} from "react"
import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import {FileCopy} from '@material-ui/icons'
import { PhoneIphone } from "@material-ui/icons"
import CopyToClipboard from "react-copy-to-clipboard"
import SimplePeer from "simple-peer"
import { io } from "socket.io-client"
import './meet.css'

const socket = io.connect('http://localhost:5000')
function Meet2(){
    const [me, setMe] = useState("")
    const [stream, setStream] = useState()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState()
    const [callerSignal,setCallerSignal] =useState(false)
    const [callAccepted, setCallAccepted] = useState("")
    const [idToCall, setIdToCall] = useState("")
    const [callEnded,setCallEnded] = useState(false)
    const [name,setName] = useState("")
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream) => {
            setStream(stream)
                myVideo.current.srcObject = stream
        })
        socket.on("me", id => {
            setMe(id)
        })
            socket.on("callUser", (data) => {
                setReceivingCall(true)
                setCaller(data.from)
                setName(data.name)
                setCallerSignal(data.signal)
            })

    },[])

    const callUser = (id) => {
        const peer = new SimplePeer({
            initiator: true,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("callUser", {
                userToCall:id,
                signalData: data,
                from: me,
                name: name
            })
        })
        peer.on("stream", (stream) => {
            
                userVideo.current.srcObject = stream
        })
        socket.on("callAccepted", (signal) => {
            setCallAccepted(true)
            peer.signal(signal)
        })

        connectionRef.current = peer
    }

    const answerCall = () => {
        setCallAccepted(true)
        const peer = SimplePeer({
            initiator: true,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("answerCall", {signal: data, to: caller})
        })
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream
        })
        
        peer.signal(callerSignal)
        connectionRef.current = peer
    }
    const leaveCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy()
    }

    return (
        <>
        <h1 style={{textAlign: "center", padding: "10px"}}>Consultation</h1>
        <div className="container">
            <div className="video-container">
                <div className="video">
                    {stream && <video playsInline muted ref={myVideo} autoPlay style={{width: "500px"}}/>}
                </div>
                <div className="video">
                    {callAccepted && !callEnded ? <video playsInline ref={userVideo} autoPlay style={{width: "500px"}}/>: null
                    }
                </div>
            </div>
            <div className="myId">
                    <TextField
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{marginBottom:"20px"}}
                    />
                    <CopyToClipboard text={me} style={{marginBottom: "2rem"}}>
                        <Button variant="contained" color="black" startIcon={<FileCopy fontsize="large"/>}>
                            Copy ID
                        </Button>
                    </CopyToClipboard>

                    <TextField
                    id="filled-basic"
                    label="ID to Call"
                    variant="filled"
                    value={idToCall}
                    onChange = {(e) => setIdToCall(e.target.value)}
                    />
                <div className="call-button">
                    {callAccepted && !callEnded ? (
                        <Button variant="contained" color="black" onClick={leaveCall}>
                            End Call
                        </Button>
                    ): (
                        <IconButton color="black" aria-label="call" onClick={() => callUser(idToCall)}>
                            <PhoneIphone fontSize="large"/>
                        </IconButton>
                    )}                    
                </div>
            </div>
            <div>
                {receivingCall && !callAccepted ? (
                    <div>
                        <h1>{name} is calling...</h1>
                        <Button variant="contained" color="black" onClick={answerCall}>
                            Answer
                        </Button>
                    </div>
                ): null}
            </div>
        </div>
        </>
    )
}

export default Meet2