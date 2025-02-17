"use client";

import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useTheme } from "@mui/material/styles"; // Dark mode support

import certik from "../../assets/images/partners/certik.svg";
import fairyproof from "../../assets/images/partners/fairyproof.png";

// Fallback icons if custom ones aren't available
import { SiMedium, SiDiscord } from "react-icons/si";

const partners = [
  {
    label: "Certik",
    src: certik,
    width: 150,
  },
  {
    label: "Fairyproof",
    src: fairyproof,
    width: 130,
  },
];

const socialLinks = [
  {
    label: "Twitter",
    icon: <TwitterIcon />,
    href: "https://twitter.com/temesgen5335",
  },
  {
    label: "Telegram",
    icon: <TelegramIcon />,
    href: "https://t.me/temesgen_5335",
  },
  {
    label: "Discord",
    icon: <SiDiscord />, // Using react-icons for missing Discord icon
    href: "https://discord.gg/temesgen5335",
  },
  {
    label: "Medium",
    icon: <SiMedium />, // Using react-icons for missing Medium icon
    href: "https://medium.com/@temesgen5335",
  },
];

const Footer = () => {
  const theme = useTheme(); // Get current theme
  const textColor = theme.palette.mode === "dark" ? "white" : "black";

  return (
    <Container sx={{ mt: 5 }}>
      <Typography sx={{ color: textColor, textAlign: "center" }}>
        Clients
      </Typography>
      
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        alignItems="center"
        justifyContent="center"
      >
        {partners.map((partner, i) => (
          <a
            key={i}
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            style={{ filter: "grayscale(100%)" }}
          >
            <img src={partner.src} alt={partner.label} width={partner.width} />
          </a>
        ))}
      </Stack>

      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        my={2}
      >
        {socialLinks.map((link) => (
          <Grid item xs={2} md={1} sx={{ textAlign: "center" }} key={link.label}>
            <IconButton
              component="a"
              href={link.href}
              target="_blank"
              aria-label={link.label}
              sx={{ color: textColor }}
            >
              {link.icon}
            </IconButton>
          </Grid>
        ))}
        <Grid item xs={2} md={1} sx={{ textAlign: "center" }}>
          <IconButton component="a" href="mailto:temesgengebreab33@gmail.com" aria-label="Email" sx={{ color: textColor }}>
            <EmailIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 3, pb: 3, textAlign: "center", color: textColor }}
      >
        {"Copyright © "} {new Date().getFullYear()} TemesgenG. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
