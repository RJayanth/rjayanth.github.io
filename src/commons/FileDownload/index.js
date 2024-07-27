import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import './index.css';

const FileDownload = ({title, fileName, path}) => {
  const throttleFn = (fn, delay) => {
    let invokeFn = true;;
    return function(...args) {
      console.log("throttle function called")
      if(invokeFn) {
        fn.apply(null, args);
        invokeFn = false;
        setTimeout(() => {
          invokeFn = true;
        }, delay);
      }
    }
  };

  const handleDownload = () => {
    const filePath = `${process.env.PUBLIC_URL}/${path}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const throttledDownload = throttleFn(handleDownload, 500);

  return (
    <div className="resume-download" onClick={throttledDownload}>
      <span className="resume-text">{title}</span>
      <CloudDownloadIcon />
    </div>
  );
};

export default FileDownload;
