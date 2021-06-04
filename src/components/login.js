import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'

const Login=()=>{

    const paperStyle={height:'90vh',width:400,marginLeft:180,padding:30,}
    const avatarStyle={backgroundColor:'red',width:70,height:70,color:"red",padding:40}
    const btnstyle={margin:'8px 0',backgroundColor:"red",marginTop:30}
    const btnssstyle={margin:'8px 0',backgroundColor:"white",color:"red",width:343,height:40,marginTop:10}
    const forgot={color:'red',marginTop:40,marginLeft:75}
    return(
        <Grid>  
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                <h2 style={{color:"red",marginBottom:30}}>Log In</h2>
                     <Avatar style={avatarStyle}></Avatar>
                </Grid>
                <br/>
                <TextField label=' Enter Username' style={{marginTop:30}} placeholder='Enter username' fullWidth required/>
                <p></p>
                <TextField label=' Enter Password'  style={{marginTop:20}} placeholder='Enter password' type='password' fullWidth required/>
              <p></p>
                <Button type='submit' color='primary'   variant="contained" style={btnstyle} fullWidth>LOGIN</Button>
               <p></p>
            <Button type='submit'  color='primary' variant="contained" style={btnssstyle}  fullWidth>Don't Have Account? Signup</Button>
                <p></p>
            <Typography >
                      <h5 style={forgot} >Forgot password ?</h5> 
                </Typography>  
            </Paper>
        </Grid>
    )
}

export default Login