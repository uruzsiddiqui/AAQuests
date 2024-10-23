import React, {useState} from "react";
import {
  ChakraProvider,
  theme,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Container,
  Box
} from '@chakra-ui/react';
import "./profile.css";

async function notifyUser(notificationText = "Thank you for in enabling notification"){
  if(!("Notification" in window)){
    alert("Browser does not support notification");
  } else if(Notification.permission === "granted"){
    const notification = new Notification(notificationText);
  } else if(Notification.permission !== "denied"){
    await Notification.requestPermission().then((permission) => {
      if(permission === "granted"){
        const notification = new Notification(notificationText);
      }
    });
  }
}

const ProfileBio = ({ currentProfile }) => {

  const [userResponded, setUserResponded] = useState(false);

  async function enableNotifsAndClose() {
    await notifyUser().then(() => {
     setUserResponded(true);  
    });   
   }
   
  function disableNotifsAndClose() {
     setUserResponded(true);  
 }
  return (
    <>
    <div className="chakra" >

     {(!(userResponded) && !(Notification.permission === "granted"))?(
        <ChakraProvider theme={theme} >
            <Container>
              <Alert status="success" >
                <AlertIcon />
                <Box>
                  <AlertTitle>
                    Notification
                  </AlertTitle>
                <AlertDescription>
                  Would you like to enable Notification
                </AlertDescription>
                </Box>
                <Button colorScheme="teal" size="sm" onClick={enableNotifsAndClose}>Sure</Button>      
                <Button colorScheme="gray" size="sm" onClick={disableNotifsAndClose}>No Thanks</Button>      
              </Alert>
              </Container>  
        </ChakraProvider>  
        
    ) : (Notification.permission === "granted") ? 
      (
        <h1>
            You have enabled notification
          </h1>
      ) : 
      <>
         <h1>
          You have disabled Notifications
         </h1>
      </>}
          </div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </>
  );
};

export default ProfileBio;
