// src/components/Profile.jsx
import profileImg from '../assets/WhatsApp Image 2025-05-08 at 00.27.30_f3cdf0fc.jpg';

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center py-12" id="scene">
      <img
        src={profileImg}
        alt="Thenvanathi"
        className="rounded-full w-40 h-40 object-cover border-4 border-blue-500"
      />
      <h1 className="text-3xl mt-4 font-bold">Mohammed Al Ashik</h1>
      <p className="text-lg mt-2 text-gray-300">MERN Stack Developer | Passionate about Tech & Design</p>
    </div>
  );
}
