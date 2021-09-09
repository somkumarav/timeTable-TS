import React, { useEffect, useRef, useState } from 'react';
import blankProfile from '../utils/images/blankProfile.png';

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Signup: React.FC<Props> = ({ setIsAuth }) => {
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>();
  const fileInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName && userEmail && preview) {
      const userModel = {
        name: userName,
        email: userEmail,
        profileImage: preview,
      };
      console.log(userModel);
      localStorage.setItem('user', JSON.stringify(userModel));
      setIsAuth(true);
    }

    setUserName('');
    setUserEmail('');
    setImage(null);
    setPreview('');
  };

  return (
    <div className="Login">
      <div className="login-left">
        <div className="user-profile">
          {preview ? (
            <img
              src={preview}
              alt="Profile picture"
              className="user-profile-image"
            />
          ) : (
            <img
              src={blankProfile}
              alt="Profile picture"
              className="user-profile-image"
            />
          )}
          <h3 className="user-profile-name">
            {userName ? userName : 'Name...'}
          </h3>
          <h3 className="user-profile-email">
            {userEmail ? userEmail : 'email...'}
          </h3>
        </div>
      </div>

      <div className="login-right">
        <h2>Login</h2>
        <form onSubmit={handlSubmit} className="user-details">
          <input
            type="text"
            placeholder="Name..."
            className="user-details-name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email..."
            className="user-details-email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />

          <input
            type="file"
            className="user-details-image"
            ref={fileInputRef as React.LegacyRef<HTMLInputElement>}
            accept="image/*"
            onChange={(e) => {
              let file = e.target.files;
              if (file && file[0].type.substr(0, 5) === 'image')
                setImage(file[0]);
              else setImage(null);
            }}
          />
          <button
            className="user-details-image-button"
            onClick={(e) => {
              e.preventDefault();
              if (fileInputRef.current) fileInputRef.current.click();
            }}
          >
            Add Image
          </button>
          <button type="submit" className="user-details-login-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
