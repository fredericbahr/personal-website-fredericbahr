import React, { useRef } from "react";
import { IChatDownload } from "../../../interfaces/chat";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import styled from "styled-components";
import useElementDimensions from "../../../utils/hooks/useElementDimension";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import pdfFileIcon from "../../../assets/img/pdf-file.svg";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const StyledCard = styled(Card)`
  margin: 0.5rem 0;
  max-width: 80%;
  background-color: rgba(70, 77, 66, 0.15);
  border-radius: 1.125rem 1.125rem 1.125rem 0;
`;

const StyledCardContent = styled(CardContent)`
  padding: 16px 16px 0 16px;
`;

const StyledPage = styled(Page)`
  & > div {
    margin: auto;
  }
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  font-size: 14px;
`;

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const ChatDownload = ({ type, url, fileName }: IChatDownload) => {
  const ref = useRef(null);
  const size = useElementDimensions(ref.current);

  /**
   * Creates an anchor element and sets the download and href
   * Immediatly clicks it and then removes the element again
   */
  const handleDownload = () => {
    const link: HTMLAnchorElement = document.createElement("a");
    document.body.appendChild(link);
    link.download = fileName.toString();
    link.href = url.toString();
    link.click();
    document.body.removeChild(link);
  };

  const renderPDFDownlaod = () => {
    return (
      <StyledCard ref={ref}>
        <CardActionArea onClick={() => handleDownload()}>
          <StyledCardContent>
            <Document file={url} renderMode="svg">
              <StyledPage
                pageNumber={1}
                height={size.width}
                loading={<CircularProgress />}
              />
            </Document>
          </StyledCardContent>
        </CardActionArea>
        <StyledCardActions>
          <StyledImg src={pdfFileIcon} />
          <StyledTypography>{fileName}.pdf</StyledTypography>
          <IconButton onClick={() => handleDownload()}>
            <ArrowCircleDownIcon />
          </IconButton>
        </StyledCardActions>
      </StyledCard>
    );
  };

  return <>{type === "pdf" ? renderPDFDownlaod() : ""}</>;
};
