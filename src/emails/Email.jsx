import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Heading
} from '@react-email/components';
import * as React from 'react';


export const Email = () => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Img
          src=""
          // width="170"
          // height="50"
          // alt="Deimantinis "
          // style={logo}
        /> */}
        <Heading style={heading}>
        Deimantinis gręžimas
        </Heading>
        <Text style={paragraph}>Sveiki,</Text>
        <Text style={paragraph}>
          Jūsų pranešimą gavome. <br />
          Netrukus su Jumis susisieksime.
        </Text>
        <Section style={btnContainer}>
          {/* <Button pX={12} pY={12} style={button} href="https://www.google.com/">
            Grįžti į puslapį
          </Button> */}
        </Section>
        <Text style={paragraph}>
          Pagarbiai,
          <br />
          Deimantinis gręžimas
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Zaibo g. 350 ,Peter <br />
          +650 451321123 <br />



        </Text>
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center',
};

const button = {
  backgroundColor: '#0e902e',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};

const  heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  textAlign: 'center',
  letterSpacing: '-1px',
  color: 'linear-gradient(rgba(222, 53, 76, 0.8), rgba(226, 123, 27, 0.8))'
};

