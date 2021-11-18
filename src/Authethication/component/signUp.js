import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSignUp } from "../hooks/useSignUp";
import { Loaders } from "../hooks/Loaders";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import img from "../helpers/placeholder.png";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useGoogle } from "../hooks/useGoogle";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
const Signup = () => {
  const [progress, setProgress] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(img);
  const { signInGoogle } = useGoogle();

  const { Logon, isLoading, isError } = useSignUp();

  const SignUp = () => {
    Logon(email, password, displayName, photo);

    console.log(email, password, displayName);
  };

  const GoogleSignIn = () => {
    signInGoogle();
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
        const count = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(count);
        setProgress(count);
      },
      (err) => err.message,
      () => getDownloadURL(uploadTask.snapshot.ref).then((URL) => console.log(URL))
    );
  };

  return (
    <Container>
      <Wrapper>
        <InputCard>
          <div>
            <HeaderText>
              Join <span>Essentials</span>{" "}
            </HeaderText>
            <IconHolder>
              {" "}
              Sign up with
              <Icons onClick={GoogleSignIn}>
                <FcGoogle />
              </Icons>
            </IconHolder>
            <p>Or use your email for registration</p>
          </div>

          <InputHolder>
            <ImageHolder>
              <ImageUpload>
                {progress > 0 && progress < 90 ? (
                  <ImgVeil>
                    <CircularProgress variant="determinate" value={progress} />
                  </ImgVeil>
                ) : null}

                <Image src={photo} />
              </ImageUpload>
              <InputLabel htmlFor="pix">Upload Image</InputLabel>

              <InputImage type="file" id="pix" accept="image/" onChange={handleImages} />
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
            <div>Already have an Account? </div>
            <Div to="/login">Sign In</Div>
          </InputHolder>
        </InputCard>
      </Wrapper>
    </Container>
  );
};

export default Signup;
const Div = styled(Link)`
  text-decoration: none;
  color: #387546;
  padding-bottom: 20px;
`;
const InputCard = styled.div`
  display: flex;
  background: white;
  align-items: center;
  padding: 10px 50px;
  border-radius: 10px;
`;
const ImageUpload = styled.div`
  position: relative;

  width: 100px;
  height: 120px;
  margin: 5px 0;
`;
const ImgVeil = styled.div`
  background: rgb(0, 0, 0, 0.7);
  width: 100px;
  height: 100px;
  margin: 5px 0;
  top: 0;
  left: 0;
  z-index: 1;
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
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
  justify-content: center;
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
  font-weight: bold;
  margin: 20px 0;
  span {
    color: #387546;
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 0;
  margin: 5px 0;
  position: absolute;
  top: 0;
  left: 0;
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
  min-height: 87.3vh;
  background: #387546;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 87.3vh;
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
  background: #387546;
  margin: 10px 0;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
