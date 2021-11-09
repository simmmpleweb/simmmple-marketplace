import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Box, Input, Text, Flex, Button } from "@chakra-ui/react";
const CustomForm = ({ status, message, onValidated }) => {
  //  States
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  //  Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Flex align='center'>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          placeholder='Enter your email address'
          boxShadow='none'
          border='none'
          _focus={{ border: "none" }}
          _placeholder={{ color: "#878CBD" }}
          isRequired
        />
        <Button
          bg='brand.300'
          minW='150px'
          h='56px'
          px='0'
          _hover={{ bg: "#1A05B7" }}
          _active={{ bg: "#1A05B7" }}>
          <Input
            fontWeight='normal'
            fontSize='sm'
            color='white'
            borderRadius='30px'
            border='none'
            label='subscribe'
            type='submit'
            width='100%'
            height='100%'
            bg='transparent'
            formValues={[email]}
          />
        </Button>
      </Flex>
      <Text color='white' textAlign='center' fontSize='sm' mt='10px'>
        {status === "success" ? "Success!" : ""}
      </Text>
      {status === "sending" && (
        <Box textAlign='center' color='white'>
          Sending...
        </Box>
      )}
      {status === "error" && (
        <Text
          color='white'
          textAlign='center'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <Text
          color='white'
          textAlign='center'
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  );
};
const MailchimpForm = (props) => {
  const postUrl = `https://simmmple.us4.list-manage.com/subscribe/post?u=${"3064631c49d7b6adbeb851b4c"}&id=${"3ebe759474"}`;

  return (
    <Box className='mc__form-container'>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </Box>
  );
};

export default MailchimpForm;
