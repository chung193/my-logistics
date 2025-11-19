import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

const ImageUploadWithPreview = ({ onChange, initValue = null }) => {
    const [previewUrl, setPreviewUrl] = useState(initValue);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
            onChange(file);
        }
    };

    return (
        <Box>
            <Button
                variant="contained"
                component="label"
                size='small'
            >
                Chọn ảnh
                <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </Button>

            {previewUrl && (
                <Box mt={2}>
                    <img src={previewUrl} alt="Preview" width={200} style={{ borderRadius: 8 }} />
                </Box>
            )}
        </Box>
    );
};

export default ImageUploadWithPreview;
