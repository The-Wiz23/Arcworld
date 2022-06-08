import React from "react";
import { Avatar, Grid, Typography, Grow } from "@mui/material";
import { Box } from "@mui/system";

// Icons
import { AiFillCrown } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";
import { useTranslation } from "react-i18next";

const CreatorCard = ({ ts, handleSellerDetails, darkMode }) => {
  const { t } = useTranslation();
  const {
    id,
    sellerName,
    sellerUserName,
    sellerInfo,
    sellerImage,
    sellerItems,
  } = ts;

  const createdItems = sellerItems.filter((si) => si.tag === "createdItems");
  const ownedItems = sellerItems.filter((si) => si.tag === "ownedItems");

  const parsedId = parseInt(id) * 100;

  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 + parsedId } : {})}
    >
      <Grid item xs={1} sm={6} md={3} zIndex={1000}>
        <Box
          
        >
          <Box
            
          >
            <Box
              
            >
              <Box>
                <Avatar
                  src={sellerImage}
                  alt={sellerUserName}
                  sx={{
                    width: "1598px",
                    height: "3264px",
                    
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  component="h3"
                  sx={{ fontWeight: "500" }}
                >
                  {sellerName}
                </Typography>
                <Typography
                  variant="caption"
                  component="h2"
                  sx={{ fontWeight: 500 }}
                >
                  {sellerUserName}
                </Typography>
              </Box>
            </Box>
            <Typography
              color="secondary"
              variant="caption"
              component="div"
              sx={{
                fontWeight: 400,
                my: 3,
                fontSize: "10px",
                textAlign: "justify",
              }}
            >
              {sellerInfo}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                color={darkMode ? "#ffffff" : "#121212"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography component="span" color="secondary">
                  <MdAddToPhotos />
                </Typography>
                <Typography
                  color="secondary"
                  variant="caption"
                  sx={{ fontSize: "8px" }}
                >
                  {createdItems?.length} {t("ITEMS_CREATED")}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography component="span" color="secondary">
                  <AiFillCrown />
                </Typography>
                <Typography
                  color="secondary"
                  variant="caption"
                  sx={{ fontSize: "8px" }}
                >
                  {ownedItems?.length} {t("ITEMS_OWNED")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grow>
  );
};

export default CreatorCard;
