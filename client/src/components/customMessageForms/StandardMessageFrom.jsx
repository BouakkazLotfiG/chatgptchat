import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const StandardMessageFrom = () => {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState('');
  const [preview, setPreview] = useState('');

  return (
    <div className='message-form-container'>
      {preview && (
        <div className='message-form-preview'>
          <img
            className='message-form-preview-image'
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
            alt='message preview imag'
          />
          <XMarkIcon
            className='message-form-icon-x'
            onClick={() => {
              setPreview('');
              setAttachment('');
            }}
          />
        </div>
      )}
      <div>nigga</div>
    </div>
  );
};

export default StandardMessageFrom;
