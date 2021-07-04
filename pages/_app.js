import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto bg-blue-300 p-4">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
