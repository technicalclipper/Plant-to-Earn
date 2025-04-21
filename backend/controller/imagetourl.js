import ImageKit from "imagekit";
const imagekit = new ImageKit({
    publicKey: "public_7pB6E7ybZQc5hFApJhiPki2QpHI=",
    privateKey: "private_DrPDbV0aYjPVRQ/UluemfKXanNI=",
    urlEndpoint: "https://ik.imagekit.io/ycg1urlz8",
});

export const uploadimage = async(req, res) => {
    const { file, fileName } = req.body;
    
    try {
        const response = await imagekit.upload({
            file,
            fileName,
            folder: "/uploads",
        });
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "File upload failed" });
    }
}