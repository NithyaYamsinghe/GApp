import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import doc from "../media/doc.png";
import file from "../media/file.png";
import form from "../media/form.png";
import presentation from "../media/presentation.png";
import video from "../media/video.png";

export default function GDrive() {
  const data = {
    nextPageToken:
      "~!!~AI9FV7SbOSD9BkjvEwA_IbU2B7MRFgp9sxUDMlYz0MPloX4qrG9pW1c2NPWQNFtpbxfrqOrNmPAesI8fcZN5AerfK7vptsphEHldDUZsf11gcYXP6NPtv7H69Q1B8TtTaOdY5Q0ETY6kiCpWeLK7nFlrVO__XC54qT1pUo9WNRUpBZ_a23dlr6ija9HaSeiKnoBAwnKSAYMcE13dDFzfj9RIwQBwVQjw7plOWUtEBMEa1Wk57g2Lc0lsUHbl3QMbgVHNAFn0OtNBUfaE9MeqqY98c3g3bkhVqXyyJPHW8Jo4Zb_lwu6eymQ=",
    incompleteSearch: false,
    kind: "drive#fileList",
    files: [
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1fcXHwEdpHbSEzYzGN8we7_BSgbb9lmpu",
        name: "RNN.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1xapLvAtiQGpSJjkLmtMS7v-yE3AZJl35",
        name: "CNN.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1S3S8v-RtKaaDC-8Wyk8BTyz6v9dVa8Jn",
        name: "Comparison of RNN vs CNN",
      },
      {
        mimeType: "application/vnd.google-apps.spreadsheet",
        kind: "drive#file",
        id: "1PPxiaAgL0bVYuubyfYWkNo0LUl1hnsOZoF07k-Cepyw",
        name: "SLIIT - Viva Questions",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1pGnsdYdAKrkkHjvObli7vvL5Z47GB-oo",
        name: "RNN.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1a6T_WfBjplHJeb9uBFpTJPqkEHEcF7fg",
        name: "CNN.ipynb",
      },
      {
        mimeType: "application/x-zip-compressed",
        kind: "drive#file",
        id: "10j9PRKiyZ5Z7sgb3KokV0pJGUsYoIWqv",
        name: "dl assignment 2.zip",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1xkwM91hU-D1S2iZb0oOWvsgtHMrNtgA9",
        name: "recurrent-neural-network-with-pytorch.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "13rkENwoFyq8IJrC0iDlLCHLbQOyrAtXr",
        name: "pytorch-tutorial-for-deep-learning-lovers.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1Pzk7YIJFDlyQBhe4yweMheSLnDkbPmVN",
        name: "Untitled",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1mTPpgpZrw_iHPc9rbZuk5IIEs64ZGP2x",
        name: "deep-learning-for-time-series-forecasting.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1N6N-P-mPb-XB2dJst49P7xt_c07Oldll",
        name: "time-series-forecasting-with-lstm-autoencoders.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1EslfVbmLpPAHjo5VnEqYD6311_lFOZi9",
        name: "Time-series forecasting with LSTM autoencoders .ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1uA3q0radxiAfVAyvTWAVnmYOu6FkbL9B",
        name: "IT18219876_IRWA_Assignment_3.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1X6JmYBuFqV2__J76vCiD5iaQ980Z5rhY",
        name: "Untitled1.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1SgyNyMnskXPy19Dhz8lx_7QVpTHEtEWQ",
        name: "Untitled0.ipynb",
      },
      {
        mimeType: "application/vnd.google-apps.spreadsheet",
        kind: "drive#file",
        id: "18Do44nS5LMXJrjMkZnrpM7gfL8GMXDeyZu_XMElFWjw",
        name: "iMask | RP Log Book | Intelligent Mask to Detect Sysmptoms of COVID - 19 ",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1DEBKSoqNSth98wV_GgZku0trlgaVVK9Kf4g83JLCSf4",
        name: "iMask | Project Scope",
      },
      {
        mimeType: "application/vnd.google-apps.presentation",
        kind: "drive#file",
        id: "1jLZEi5iaws2t92XSEsRo6PNAtUBm6ys6HCNqkCO_xuY",
        name: "Project Wireframes",
      },
      {
        mimeType: "application/vnd.google-apps.presentation",
        kind: "drive#file",
        id: "134jluOS3XzAYCro1T0gxyV1mXuIWgzSECo6F49B5kvY",
        name: "Lookbook",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1HFW-R2pyIuSBt_6BDbp5AnJAisKvM_w28avT-zhUSA4",
        name: "RR Analyse Report",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1_AZRlU6Kjnt25wB-VRCGx92p3DPZ9JI_sm9S-UmHdvE",
        name: "Proposal Report Draft | IT18233704",
      },
      {
        mimeType: "application/vnd.google-apps.form",
        kind: "drive#file",
        id: "1898ND4wwlECG0QGtFT1swYis3snku0yWMxTf4pxmJmY",
        name: "Survey About COVID-19",
      },
      {
        mimeType: "application/vnd.google-apps.form",
        kind: "drive#file",
        id: "1bniMdKDS56xAc6z1ZxWyXMByGHm0CvRfYGbwkx3rJ1g",
        name: "Untitled form",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1St7f9joTHIxhsm8CTF3Dr98vYJJiWA5-60aId2e7RVE",
        name: "iMask | Research Survey",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1wT0Smtzc9gwcwX7d8zrOgrRzqpMaHhWCwx2PLZiWS40",
        name: "Assignment 1 \u2013 Review Paper on Software Security in Social Media",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "16xNhcWC6xGTyUmwCfCvUJvn-4sXLcgyI",
        name: "Day 19 - Part 01.mp4",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1vT9sCffsW-mGPsXg-qp2A4nymfAeKWyTBLa2XxJb_mw",
        name: "Assignment 1 \u2013 Review Paper on Deep Learning in Medical Image Analysis ",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1bPQNAVHPm0woQx_iUtzK9BpTvi2S9-HNhFS_MrrC7Mo",
        name: "Untitled document",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1Rc-9R0bc5CiJncisSvvezH6a-MSJxf8F",
        name: "Day 16.mp4",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1YQhISqeX5JveVRoeV2FEaWeUKMCFiHC3",
        name: "Autonomous+driving+application+_+Car+detection+_+v3_(1).ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1MvGhT6rY4vJeStDZO22zQodfhbsHLoNW",
        name: "yolo.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1Sp0TNqX0h_GwZFsbLAJ-zQ5pjxiY2w5Q",
        name: "Autonomous+driving+application+_+Car+detection+_+v3_(1).ipynb",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1R4WevwduFGx2FU5UWGalYBp6x4_hHSdu",
        name: ".ipynb_checkpoints",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1Yai1k2bNMsac44nSb538XTaEbWB3WDFc",
        name: "yolo.ipynb",
      },
      {
        mimeType: "application/vnd.google-apps.presentation",
        kind: "drive#file",
        id: "1SZu2w8XFip9dnZ1SwOKRZO1Mge1dGFRcZx4IIaOd51M",
        name: "iMask - Intelligent Mask to Detect Sysmptoms of COVID - 19",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1yI_8x0ayNDqemH8nm5tUnufR9g53tg6A",
        name: "Face_Recognition_for_the_Happy_House_v2.ipynb",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1ygXeYy9t4aCt8JcfVv2UieebGVxQYoN-lRlhcCsiVr0",
        name: "iMask - Intelligent Mask to Detect Sysmptoms of COVID - 19 | A+",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1vRfaj5FqDfFeZlboBVK9IojFcA8RuYE7",
        name: "Day 06.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "18gA7rZFIsxTtvgzq1qFjF5E_wv8R5ROy",
        name: "Day 05.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1NfRscyOiqLEmw0oyPSnBrxr5ozJdR7sJ",
        name: "Day 04.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "12gXJF59vkCjqoMBArHP6ZngoilWfe4YL",
        name: "Day 03.mp4",
      },
      {
        mimeType: "image/jpeg",
        kind: "drive#file",
        id: "1nTsiBOB9LfQlxbt6PuhiZotKtbMHyPgc",
        name: "Document from Kavindu Perera",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1nNVABfuhpAep-whzhL1ZBZwYD9VblrPf",
        name: "Zoom Background ",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1Q2UhVQW_FVgspjAoH2YCH3cTsWQOW14N",
        name: "Day 02 - Part 02.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1CBEF--LQqm7Xfdct0H9Vc5jDDcHQXdxL",
        name: "Day 02 - Part 01.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1NqVdN8L3wmHJ-r9inuOZuZnc3WcgA7eL",
        name: "Day 01 - Part 03.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1fVasdmYQ7aPokGY2GPKvXz2MS8HL3Ihb",
        name: "Day 01 - Part 02.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1DrxgKDGktHUfAMv40gBNXN9qnp5VFUvP",
        name: "Day 01 - Part 01.mp4",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1ZAqLE22_rcfyvQURNNp5u52pN4lcaYjz",
        name: "Image_Filtering_(Convolution).ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1VZl3JIJX47n-J8AEiVPepol7cUkGw_AB",
        name: "1D_Convolution.ipynb",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1aZJ3sxsWL0vSTkhGCFQSrm7aHWcTZFNI",
        name: "Untitled",
      },
      {
        mimeType: "application/vnd.google.colaboratory",
        kind: "drive#file",
        id: "1ldIXZoMhq2Hq0giD6h70iV1lZMP2jBa0",
        name: "CNNs_with_Keras3.ipynb",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1q9_IsfwD70yT7Wjq8JRH5ABusr9Qd1yF",
        name: "Colab Notebooks",
      },
      {
        mimeType: "application/pdf",
        kind: "drive#file",
        id: "1K3dehf8CvVcyJCr6KCrF6-3p5ubnZ6cX",
        name: "TopicAssesment_1_TMP-2021_22-18.pdf",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1PcgzJCCUyGzZjhH3ytEC80DFK8yoGp8Ne9SMTUi3-FY",
        name: "Topic Evaluation Form ",
      },
      {
        mimeType: "image/jpeg",
        kind: "drive#file",
        id: "14BNQokgZX8M7A_7iJ1ecO3AwkmkaFp_1",
        name: "System Diagram_TMP-2021_22-18.jpg",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1czOYP--auR_Kv4SZANBDiya5t_GhG10DWwaHWgujSLU",
        name: "Research Project To Do",
      },
      {
        mimeType: "application/x-zip-compressed",
        kind: "drive#file",
        id: "15JPQbPoGZ7ZhQCcsoZxRNMXrYRzPOpIR",
        name: "Grammarly iSci 2021.zip",
      },
      {
        mimeType: "application/vnd.jgraph.mxfile",
        kind: "drive#file",
        id: "1T2cjZVhCwc9aSwuPQjLW7l8n3GCHs0zG",
        name: "Untitled Diagram.drawio",
      },
      {
        mimeType: "text/plain",
        kind: "drive#file",
        id: "1FNJB0NW9PR16Bk-fcR0CD0OCzoCpdvme",
        name: "Original Keys.txt",
      },
      {
        mimeType: "text/plain",
        kind: "drive#file",
        id: "1Lrw-Rbfv6HVWOFipvy-ZgN8dWcVmb3w6",
        name: "Original Keys (1).txt",
      },
      {
        mimeType: "application/vnd.google-apps.spreadsheet",
        kind: "drive#file",
        id: "1RewPOUFFAVAuz8qp0eMHaz37G3vEI_YFgzTNv2UQsXo",
        name: "2021 Theory- May Payment (Responses)",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1VhN8OHkEhwAci610uGrL4n9etcE34f7G",
        name: "SaleWebDesign.Com-Ultimate-ASP-NET-Core-5-Web-API-Development",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "16m752Wntw6JxV-TaLPEL7mr9lJ5vlZz0",
        name: "1. Introduction",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1Yi-rDWOWEZTiwPQ1tZLorrVE-lZcXYsT",
        name: "Sewana",
      },
      {
        mimeType: "text/plain",
        kind: "drive#file",
        id: "1wGdi24fA9eaOwEiBhlS3LprNm18KkfmP",
        name: "Sewana Web Details.txt",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1m5QJUUKyTR5_VBJhuNmgIvk6vX9dww2sxfCdaTUc0fc",
        name: "AF Draft Report ",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1y4qD_memlHJ8QsrF0edL-6Dtnjt7rYA5ayGCX_yYSmA",
        name: "DS APIs",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1-WS4myTHekfKiFcqXndNHJxH3HF-3gqz",
        name: "SA Assignment 02.mp4",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1Blgv86NuI3G-fkP3SX-4i12RazMTfQuC",
        name: "SA Assignment 02",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1ToCnMf6P55ORkIGy3nlOTOkAj-u8FK6L",
        name: "Untitled3.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1SQvzuEOBXtBXHnP5bHRqPtjTYUgxo0jM",
        name: "2021S1_JUNE_WE_06.mp4",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1DsKX4IFTb_0RsX7pYI1c8lZ6pXetWFYtujgO1a72A-Q",
        name: "SEPQM Assignment 02 | Introduce New Complexity Metric",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1Ufolyg38spiE7I9YHCvVV93Db1Gzn5U6D_kYKhvSCI0",
        name: "Interoperability",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1EKDNxQByCfWnctlSiGYP2kpT3kW_odAaaMGRWJac6iI",
        name: "DS Assignment 02 - REST API",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1RZx3Ec6hHbWoUi9sWjNQDCF4etmZ7Di1bnszbiUZaSU",
        name: "International Conference on Application Framework - ICAF",
      },
      {
        mimeType: "application/x-zip-compressed",
        kind: "drive#file",
        id: "1XgOlxi8saO59ZWsBR9VwFbI5PnNDQYeT",
        name: "2021S1_JUNE_WE_07.zip",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1hFHcAiS990zX_ngvYqL2aR7vP8Fq279F",
        name: "SA VIVA",
      },
      {
        mimeType: "application/x-zip-compressed",
        kind: "drive#file",
        id: "1OB9gbxDr6KBhFD1-4tbh6OHswTbb_dCe",
        name: "2021S1_JUNE_WE_07.zip",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1SVUQMXUrPbLG5qO28ZX4cG2au2WlPY3f",
        name: "SA Assignment 01",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1YJf5S8nGB4XXugDpKoJnSE9Z5fAqYSF2",
        name: "OSGi Clothing Store App Walkthrough.mp4",
      },
      {
        mimeType: "image/jpeg",
        kind: "drive#file",
        id: "1pyNNuviO6PCRw7XrjLwOEo0zMJE-ZFte",
        name: "osgi-sq.jpg",
      },
      {
        mimeType: "image/jpeg",
        kind: "drive#file",
        id: "1abVyG9W2YzcDRZY13xbFSGdO7HVLUQ2Q",
        name: "diagram.jpeg",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "12BHtzqfeBgsixlWvl59yZLIbT1fGstEO",
        name: "OSGi Assignment",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1c051F2GCcP36Bc1z2dvBOTxyJ7_jOIVB",
        name: "OSGi Clothing Store App Walkthrough.mp4",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1_5Qu2JR9QE5LE6cK4eq9yJs-nXv2rlWWifcjacaiWdI",
        name: "Usability Testing Script Template",
      },
      {
        mimeType: "application/vnd.google-apps.folder",
        kind: "drive#file",
        id: "1555MV4rWtaiMFPsUouUWRrVdHEv1L4_7",
        name: "SEPQM Assignment",
      },
      {
        mimeType: "application/msword",
        kind: "drive#file",
        id: "1KeNlVkWC00xnOrerR3S5mJ1yIC93pxGn",
        name: "Assignment 1 Group Details.doc",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1nDlfU7AU-Z8s02OaIi5AV8GNVzuqNkPa",
        name: "SEPQM Assignment.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1QuyoRRTdzme-DH_7KJujQ9DL4upo2CCr",
        name: "test05.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1Y2mTZNRAglSEyY-h_FK_z4oymLfsh2Ka",
        name: "test03.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1HvbN_C9DWSXSdqDjYKtieyy6qirsdRVY",
        name: "test02.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "12ss09MQNDJ6LBySb5t6RX3kNrWkFA8_Z",
        name: "test01.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1A7uZMAOsQb4G6S30oJKbDbuaHKGjrd_c",
        name: "test04.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1Sll8I3OhDPijaVB7hHvxVn-yFGQvk1yu",
        name: "testcase 1.mp4",
      },
      {
        mimeType: "video/mp4",
        kind: "drive#file",
        id: "1HwP3c9A_Pxw2SRb6LR1WlP4xKsq0x-VY",
        name: "testcase 2.mp4",
      },
      {
        mimeType: "application/vnd.google-apps.drive-sdk.457660898219",
        kind: "drive#file",
        id: "1Wn8YoO3y1rajrqYi-50MmJzCMWotHNob",
        name: "Final Review Paper.docx.zdoc",
      },
      {
        mimeType: "application/vnd.google-apps.document",
        kind: "drive#file",
        id: "1ZXzto3QwODHxlQLYZZigLm2hDsVo9SzeIQXs4_ElHEA",
        name: "Untitled document",
      },
      {
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        kind: "drive#file",
        id: "1NfOFo5ZV6f6ilNzhnOC3Zn3ScQqonECr",
        name: "Final Review Paper.docx",
      },
    ],
  };

  return (
    <Grid container spacing={3} rowSpacing={3}>
      {data.files.map((e, i) => {
        return (
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 200, maxHeight: 400 }}>
              <CardContent>
                {e.mimeType === "video/mp4" && <img src={video} width="50" />}
                {e.mimeType === "image/jpeg" && <img src={video} width="50" />}
                {e.mimeType === "application/vnd.google-apps.document" && (
                  <img src={doc} width="50" />
                )}

                <Typography variant="body2" color="text.primary">
                  {e.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
