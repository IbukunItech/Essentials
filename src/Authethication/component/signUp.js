import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSignUp } from "../hooks/useSignUp";
import { Loaders } from "../hooks/Loaders";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import img from "../helpers/placeholder.png";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(img);

  const { Logon, isLoading, isError } = useSignUp();

  const SignUp = () => {
    Logon(email, password, displayName, photo);

    console.log(email, password, displayName);
  };

  const handleImages = async (e) => {
    const file = e.target.files[0];
    const saveImg = URL.createObjectURL(file);
    setPhoto(saveImg);

    //  to upload an Image
    const storage = getStorage();
    const storageRef = ref(storage, "profileImg/ " + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => err.message,
      () => getDownloadURL(uploadTask.snapshot.ref).then((URL) => console.log(URL))
    );
  };

  return (
    <Container>
      <Wrapper>
        <HeaderText>Create account</HeaderText>
        <IconHolder>
          <Icons>
            <FcGoogle />
          </Icons>
          <Icons>
            <GrFacebookOption />
          </Icons>
        </IconHolder>
        <p>Or use your email for registration</p>
        <InputHolder>
          <ImageHolder>
            <Image src={photo} />
            <InputLabel htmlFor="pix">Upload Image</InputLabel>
            <InputImage type="file" id="pix" onChange={handleImages} />
          </ImageHolder>
          <Inputts>
            <AiOutlineUser />
            <Input
              type="text"
              placeholder="username"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Inputts>
          <Inputts>
            <AiOutlineMail />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Inputts>
          <Inputts>
            <AiOutlineLock />
            <Input
              type="password"
              placeholder="
             Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Inputts>

          {!isLoading && <Button onClick={SignUp}>Sign up</Button>}

          {isLoading && (
            <Button style={{ display: "flex" }}>
              Signing Up <Loaders />
            </Button>
          )}
          {isError && <p>{isError}</p>}
        </InputHolder>
      </Wrapper>
    </Container>
  );
};

export default Signup;

const Inputts = styled.div`
  width: 250px;
  height: 40px;
  border: 1px solid lightgray;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
  position: relative;
`;
const IconHolder = styled.div`
  display: flex;
  align-items: center;
`;
const Icons = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const HeaderText = styled.div`
  font-size: 35px;
  font-weight: 400;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  background: black;
  margin: 5px 0;
`;
const InputLabel = styled.label`
  padding: 5px 10px;
  border: 1px solid lightgray;
  font-size: 14px;
  border-radius: 5px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
const InputImage = styled.input`
  display: none;
`;
const ImageHolder = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-heigh: 80vh;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
`;

const InputHolder = styled.div`
  width: 400px;
  min-height: 50vh;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: center;
  border-radius: 10px;
  // box-shadow: 4px 4px 19px 1px rgba(0, 0, 0, 0.75);
  // -webkit-box-shadow: 4px 4px 19px 1px rgba(0, 0, 0, 0.75);
  // -moz-box-shadow: 4px 4px 19px 1px rgba(0, 0, 0, 0.75);
`;

const Input = styled.input`
  width: 220px;
  height: 40px;
  margin-bottom: 10px;
  outline: none;
  padding: 0 5px;
  border: 0;
  left: 28px;
  top: 0px;
  font-size: 16px;
  position: absolute;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 0;
  outline: none;
  background: #101522;
  margin: 10px 0;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
