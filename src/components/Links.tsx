import Navbar from "./navbar";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

function Links() {
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Stack spacing={2} sx={{ alignItems: "center" }}>
                    <Link href="https://github.com/j-klamerus" target="_blank" rel="noopener" level="title-lg" color="primary">
                        github
                    </Link>
                    <Link href="https://www.linkedin.com/in/jacob-klamerus-289265395/" target="_blank" rel="noopener" level="title-lg" color="primary">
                        linkedin
                    </Link>
                    <Typography level="body-lg" color="neutral">
                        klamerus3@gmail.com
                    </Typography>
                </Stack>
            </Box>
        </>
    );
}

export default Links;