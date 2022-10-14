import React from "react";
import { StackIcon } from "assets/svg/StackIcon";
import { ChipIcon } from "assets/svg/ChipIcon";
import { GraphIcon } from "assets/svg/GraphIcon";
import { TimeIcon } from "assets/svg/TimeIcon";
import { PeopleIcon } from "assets/svg/PeopleIcon";
import { RocketIcon } from "assets/svg/RocketIcon";
import { TrophyIcon } from "assets/svg/TrophyIcon";

export const STARS = ["1", "2", "3", "4", "5"];

export const ICONS = [
  {
    icon: <GraphIcon />,
    title: "Duis dapibus interdum auctor",
    id: 1,
  },
  {
    icon: <TimeIcon />,
    title: "Aenean ac turpis blandit",
    id: 2,
  },
  {
    icon: <StackIcon />,
    title: "Nulla quis nisi facilisis",
    id: 3,
  },
  {
    icon: <ChipIcon />,
    title: "Aenean faucibus aliquet erat",
    id: 4,
  },
];

export const ABOUT_ICONS = [
  {
    icon: <PeopleIcon />,
    title: "Vestibulum tempus placerat. ",
    id: 1,
  },
  {
    icon: <RocketIcon />,
    title: "Donec id aliquet odio sit amet",
    id: 2,
  },
  {
    icon: <TrophyIcon />,
    title: "In fermentum libero ex quis",
    id: 3,
  },
];
