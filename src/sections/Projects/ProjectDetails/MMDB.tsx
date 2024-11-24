/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Box, Heading, HStack, Icon, Image, Link, Stack, Tag, Text, VStack } from "@chakra-ui/react";
import { GithubLogo } from "@phosphor-icons/react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import mmdbVeteranHeroImage from "../../../assets/projects/mmdb-veteran/mmdb-veteran-hero.jpg";
import screenshot1 from "../../../assets/projects/mmdb-veteran/screenshot-1.png";
import screenshot2 from "../../../assets/projects/mmdb-veteran/screenshot-2.png";
import screenshot3 from "../../../assets/projects/mmdb-veteran/screenshot-3.png";
import screenshot4 from "../../../assets/projects/mmdb-veteran/screenshot-4.png";
import screenshot5 from "../../../assets/projects/mmdb-veteran/screenshot-5.png";
import screenshot6 from "../../../assets/projects/mmdb-veteran/screenshot-6.png";
import { ImageSlider } from "../../../components/ImageSlider";
import { ScrollRestoration } from "../../../components/ScrollRestoration/ScrollRestoration";
import { ProjectDetailHeader } from "./ProjectDetailHeader";

/**
 * Component to display the multimedia database project details
 */
export const MMDB = () => {
  /** translation hook */
  const { t, i18n } = useTranslation();

  /** state to manage the slider index */
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  /**
   * Handles the change of the slider index
   * @param index - the new index
   */
  const handleSliderIndexChange = (index: number) => {
    setSliderIndex(index);
  };

  return (
    <>
      <ScrollRestoration />

      <VStack width="full" alignItems="start" spacing={{ base: 4, lg: 8 }} marginTop={{ base: 4, lg: 16 }}>
        <ProjectDetailHeader
          focus={t("projects.details.multimediaDB.focus")}
          period={
            format(new Date("2022-05-31"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined }) +
            " - " +
            format(new Date("2022-07-27"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined })
          }
          title={t("projects.projectTitles.multimediaDB")}
          subtitle={t("projects.details.multimediaDB.subtitle")}
        />

        <Image
          src={mmdbVeteranHeroImage}
          width="full"
          maxHeight="50vh"
          objectFit="cover"
          marginTop={{ base: 4, lg: 0 }}
        />

        <HStack marginTop={8} spacing={8} width="full" alignItems="center">
          <Link href="https://github.com/fredericbahr/mmdba_tierarztpraxis" display="flex" gap={2}>
            <Icon as={GithubLogo} boxSize={{ base: 5, lg: 6 }} />
            <Text as="span">Github</Text>
          </Link>
        </HStack>

        <VStack marginTop={4} spacing={16} width="full" alignItems="start">
          <VStack width="full" alignItems="start" spacing={4}>
            <Heading as="h2" fontSize="3xl">
              {t("projects.details.goal")}
            </Heading>

            <Text>{t("projects.details.multimediaDB.goal")}</Text>
          </VStack>

          <VStack width="full" alignItems="start" spacing={4}>
            <Heading as="h2" fontSize="3xl">
              {t("projects.details.implementation")}
            </Heading>

            <Text>{t("projects.details.multimediaDB.implementation")}</Text>
          </VStack>

          <VStack width="full" alignItems="start" spacing={4}>
            <Heading as="h2" fontSize="3xl">
              {t("projects.details.technologies")}
            </Heading>

            <Stack direction={{ base: "column", lg: "row" }} width="full">
              <Tag justifyContent="center">TypeScript</Tag>
              <Tag justifyContent="center">React</Tag>
              <Tag justifyContent="center">Chakra UI</Tag>
              <Tag justifyContent="center">Express</Tag>
              <Tag justifyContent="center">Prisma</Tag>
              <Tag justifyContent="center">Postgres</Tag>
            </Stack>
          </VStack>

          <VStack width="full" alignItems="start" spacing={4}>
            <Heading as="h2" fontSize="3xl">
              {t("projects.details.screenshots")}
            </Heading>

            <Box alignSelf="center" width="full">
              <ImageSlider
                images={[screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6]}
                index={sliderIndex}
                imageProps={{ maxWidth: { base: "full", lg: "600px" } }}
                onIndexChange={handleSliderIndexChange}
              ></ImageSlider>
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};
