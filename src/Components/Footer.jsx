export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-gray-700 text-white py-6 text-center">
      <p className="text-sm text-gray-300">
        &copy; {new Date().getFullYear()}{' '}
        <span className="text-orange-400 font-semibold">Mohammed Al Ashik</span>. All rights reserved.
      </p>
    </footer>
  );
}
