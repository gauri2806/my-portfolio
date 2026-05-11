import { Card, Box, Typography } from "@mui/material";

export default function EducationCard({education}) {
    return (
        <>
            <Card className="w-full md:w-2/3 p-4 md:p-8 rounded-2xl border border-dark-border shadow-xl shadow-black/5 bg-dark-card flex flex-col md:flex-row gap-4 md:gap-8">
                <Box>
                    <img src={education.img_src} alt="CTPL Logo" className="w-20 h-20 md:w-30 md:h-30 rounded-md" />
                </Box>
                <Box>
                    <Typography variant="h6" className="font-semibold text-heading-text">{education.name}</Typography>
                    <Typography variant="subtitle2" className="text-heading-text">{education.course}</Typography>
                    <Typography variant="subtitle2" className="text-heading-text">{education.result}</Typography>
                    <Typography variant="body1" className="text-muted-text">{education.duration}</Typography>
                    <Typography variant="body1" className="text-muted-text">📍 {education.location}</Typography>
                </Box>
            </Card>
        </>
    )
}