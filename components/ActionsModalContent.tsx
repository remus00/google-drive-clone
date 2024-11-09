import { convertFileSize, formatDateTime } from '@/lib/utils';
import { Models } from 'node-appwrite';
import FormattedDateTime from './FormattedDateTime';
import Thumbnail from './Thumbnail';

const ImageThumbnail = ({ file }: { file: Models.Document }) => (
    <div className="file-details-thumbnail">
        <Thumbnail type={file.type} extension={file.extension} url={file.url} />
        <div className="flex flex-col">
            <p className="subtitle-2 mb-1">{file.name}</p>
            <FormattedDateTime date={file.$createdAt} className="caption" />
        </div>
    </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex">
        <p className="file-details-label text-left">{label}</p>
        <p className="file-details-value text-left">{value}</p>
    </div>
);

const FileDetails = ({ file }: { file: Models.Document }) => {
    return (
        <>
            <ImageThumbnail file={file} />
            <div className="space-y-4 px-2 pt-2">
                <DetailRow label="Format:" value={file.extension} />
                <DetailRow label="Size:" value={convertFileSize(file.size)} />
                <DetailRow label="Owner:" value={file.owner.fullName} />
                <DetailRow label="Last edit:" value={formatDateTime(file.$updatedAt)} />
            </div>
        </>
    );
};

export default FileDetails;
