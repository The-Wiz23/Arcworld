import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate, Redirect } from "react-router-dom";
import { GradientButtonPrimary } from "../../Utils/GradientButtons/GradientButtons";
import CardsDeck from "./CardDeck";

import heroBannerStyles from "./heroBannerStyles.module.css";
import MobileCardDeck from "./MobileCardDeck";


const HeroBanner = ({ darkMode, isMobile }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Box sx={!isMobile ? { pt: 4, pb: 15 } : { pt: 2, pb: 40 }}>
        <Grid
          container
          columns={{ md: 12, xs: 1 }}
          spacing={!isMobile ? {} : { xs: 8 }}
        >
          <Grid item md={8} xs={1}>
            <Box sx={!isMobile ? { p: 3 } : { pt: 2 }}>
              <Typography
                color="secondary"
                variant={!isMobile ? "h3" : "h5"}
                textAlign={isMobile ? "center" : null}
                component="h3"
                sx={{
                  lineHeight: 1.5,
                  fontWeight: 500,
                  width: `${!isMobile ? "60%" : "100%"}`,
                }}
              >
                Welcome & Collect Your{" "}
                <span className={heroBannerStyles.heroGradientText}>
                  GROGILLA
                </span>{" "}
                NFTs
              </Typography>
              {!isMobile ? (
                <Stack direction="row" alignItems="center" spacing={4} mt={4}>
                  <GradientButtonPrimary
                    onClick={() => navigate("/explore?type=all")}
                    variant="contained"
                  >
                    Explore
                  </GradientButtonPrimary>
                  <Button
                    onClick={() => Redirect("https://opensea.io/collection/ggrogilla-the-great")}
                    variant="outlined"
                    color="secondary"
                  >
                    BUY A GROG ON OPENSEA
                  </Button>
                </Stack>
              ) : null}
            </Box>
          </Grid>
          <Grid item md={4} xs={1}>
            {!isMobile ? (
              <CardsDeck darkMode={darkMode} />
            ) : (
              <MobileCardDeck darkMode={darkMode} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroBanner;
