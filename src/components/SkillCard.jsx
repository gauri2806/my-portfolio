import { Box, Card, Stack, Typography } from "@mui/material"
export default function SkillCard({skillSection}){
    return (
        <>
            <Card className="w-full p-5 rounded-2xl border border-dark-border shadow-xl shadow-black/5 bg-dark-card flex flex-col">
                <Typography variant="h6" className="font-semibold text-heading-text">
                    {skillSection.title}
                </Typography>
                <Box variant="body1" className="text-muted-text flex gap-4 mt-3 flex-wrap">
                    {skillSection.skills.map((skill)=><Stack>{skill}</Stack>)}
                </Box>
            </Card>
        </>
    )
}