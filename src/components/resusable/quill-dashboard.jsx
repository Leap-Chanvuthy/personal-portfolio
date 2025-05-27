import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const GuillDashboard = () => {
    const [value, setValue] = useState('');
    const [copied, setCopied] = useState(false);
    const codeRef = useRef(null);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            // fallback for older browsers
            if (codeRef.current) {
                const range = document.createRange();
                range.selectNodeContents(codeRef.current);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                document.execCommand('copy');
                sel.removeAllRanges();
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            }
        }
    };

    return (
        <div className="mx-auto p-4">
            <div className="font-semibold mb-2">Quill Dashboard Component</div>
            <ReactQuill 
                theme="snow" 
                value={value} 
                onChange={setValue} 

            />
            <div className="mt-5">
                <div className="flex flex-wrap justify-between items-center">
                    <strong>HTML Output:</strong>
                    <button
                        onClick={handleCopy}
                        className={`px-4 py-1.5 rounded text-white text-sm mt-2 ${
                            copied ? 'bg-green-600' : 'bg-blue-700'
                        }`}
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                {/* HTML as code (for copying) */}
                <pre
                    className="bg-gray-100 p-3 rounded mt-2 overflow-x-auto text-sm"
                    style={{ height: 200 }}
                >
                    <code ref={codeRef}>{value}</code>
                </pre>
                {/* Rendered HTML */}
                <div className="mt-4">
                    <div className="font-medium mb-1">Rendered Output:</div>
                    <div
                        className="border rounded p-3 min-h-[50px] bg-white"
                        style={{ height: 200, overflowY: 'auto' }}
                        dangerouslySetInnerHTML={{ __html: value }}
                    />
                </div>
            </div>
        </div>
    );
};

export default GuillDashboard;