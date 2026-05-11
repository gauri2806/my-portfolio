import { Card, Box, Typography } from "@mui/material"

export default function ExperienceCard({experience}){
    console.log(experience)
    return (
        <>
            <Card className="w-full md:w-2/3 p-4 md:p-8 rounded-2xl border border-dark-border shadow-xl shadow-black/5 bg-dark-card flex flex-col md:flex-row gap-4 md:gap-8">
                <Box>
                    <img src={experience.img_src} alt="CTPL Logo" className="w-20 h-20 md:w-30 md:h-30 rounded-md"/>
                </Box>
                <Box>
                    <Typography variant="h5" className="font-semibold text-heading-text">{experience.name}</Typography>
                    <Typography variant="subtitle1" className="text-heading-text">{experience.role}</Typography>
                    <Typography variant="body1" className="text-muted-text">{experience.duration}</Typography>
                    <Typography variant="body1" className="text-muted-text">📍 {experience.location}</Typography>
                </Box>
            </Card>
        </>
    )
}