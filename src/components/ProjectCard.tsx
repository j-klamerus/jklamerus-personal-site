import { Card, CardContent, CardCover, Typography, Chip, Link, Box, Stack } from "@mui/joy";

export interface ProjectCardProps {
    image: string;
    name: string;
    tags: string[];
    description: string;
    link: string;
    linkLabel?: string;
}

export default function ProjectCard({ image, name, tags, description, link, linkLabel }: ProjectCardProps) {
    return (
        <Card sx={{ width: 320, minHeight: 400, p: 2 }}>
            <CardCover>
                <img src={image} alt={name} style={{ objectFit: "cover", width: "100%", height: 180 }} />
            </CardCover>
            <CardContent sx={{ mt: 20 }}>
                <Typography level="h3" sx={{ mb: 1 }}>
                    {name}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap" }}>
                    {tags.map((tag) => (
                        <Chip key={tag} size="sm" color="primary" variant="soft">
                            {tag}
                        </Chip>
                    ))}
                </Stack>
                <Typography level="body-md" sx={{ mb: 2 }}>
                    {description}
                </Typography>
                <Box>
                    <Link href={link} target="_blank" rel="noopener" underline="hover">
                        {linkLabel || "View Project"}
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
}
