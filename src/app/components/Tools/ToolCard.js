import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import { Star, Info } from "@mui/icons-material";
import * as Icons from "@mui/icons-material";

export default function ToolCard({ tool, onFavorite, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = Icons[tool.icon] || Info;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          border: 2,
          borderColor: "transparent",
          "&:hover": { borderColor: "success.light" },
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              {tool.name}
            </Typography>
          }
          subheader={
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {tool.description}
            </Typography>
          }
          action={
            isHovered && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      onFavorite(tool.id);
                    }}
                  >
                    <Star color={tool.favorite ? "success" : "inherit"} />
                  </IconButton>
                  <Tooltip title={tool.tooltip}>
                    <IconButton>
                      <Info />
                    </IconButton>
                  </Tooltip>
                </motion.div>
              </AnimatePresence>
            )
          }
        />
        <CardMedia
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            bgcolor: "success.light",
            borderRadius: 2,
            mb: 2,
            width: 64,
            height: 64,
            mx: "auto",
          }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon sx={{ fontSize: 32, color: "success.main" }} />
          </motion.div>
        </CardMedia>
        <CardContent>
          <Button
            fullWidth
            variant="contained"
            color="success"
            href={`/${tool.id}`}
            onClick={() => onClick(tool.id)}
            sx={{
              color: "white",
              "&:hover": { bgcolor: "success.dark" },
            }}
          >
            Open Tool
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
