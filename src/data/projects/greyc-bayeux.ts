import type { ProjectDetail } from "./types";

const detail: ProjectDetail = {
  slug: "greyc-bayeux",

  fullDescription: [
    "This was a 6-month industrial project (2025/2026) run by ENSICAEN in partnership with the GREYC research laboratory (CNRS/ENSICAEN) and the Bayeux Museum, under the supervision of Régis Clouard and Julien Rabin. The Bayeux Tapestry is a roughly 70-meter, 11th-century embroidered narrative, and the project pursued two complementary axes: making its dense iconography searchable through image segmentation, and imagining the scenes that no longer survive through generative AI. My own contribution was centered on the segmentation and visual-search track, with some additional tasks on the generative side.",

    "The segmentation track builds on a prior year's project, which already had a visual similarity search interface but suffered from two problems: fixed-size selection boxes that couldn't properly enclose large objects like ships or buildings, and similarity scores that stayed nearly constant regardless of the query, making results hard to interpret. The goal was to extract coherent, appropriately-sized objects from the tapestry to serve as a better foundation for similarity search.",

    "The first approach explored was Meta's Segment Anything (SAM), aiming to use its automatically generated masks as ready-made object candidates. In practice, SAM badly over-segmented the tapestry: a single figure could be split into many overlapping masks tied to sub-parts and background embroidery texture, making reliable aggregation into whole objects very difficult, and the high resolution of the source images made SAM's output large and expensive to handle. This approach was abandoned in favor of classical, more controllable techniques.",

    "The adopted pipeline instead uses Canny edge detection followed by morphological operations to reinforce shape continuity and reduce noise, converting the resulting regions into candidate bounding boxes. Since a single object's contours are often split into several adjacent boxes, a dynamic aggregation step regroups them using configurable geometric criteria — spatial proximity, overlap, and relative size — applied over several passes, with a separate rule merging small leftover boxes into nearby larger objects. The aggregated boxes are then extracted and normalized into fixed-size square tiles with aspect ratio preserved and padding added as needed, while keeping an explicit link back to each tile's bounding box and source image for traceability.",

    "These normalized tiles feed a visual similarity search built on CLIP's image encoder, projecting each segmented object into a shared feature space so that visually similar motifs — a soldier's posture, a horse, a building — can be found across the tapestry regardless of position or scale. The pipeline was designed to generalize beyond Bayeux: applying it to two other tapestries, from Rollon and Pirou, required only adjusting configuration parameters (contour thresholds, aggregation rules, tile size), not the pipeline itself. A coverage metric — the share of each image's surface enclosed by the final aggregated boxes — averaged 83.84% across the Bayeux dataset, confirming the pipeline captures most visually relevant content without over-segmenting the background fabric. The existing search web interface was then extended to support multiple tapestries and multi-format tiles, plus a boost/ban voting mechanism letting users flag which results are relevant.",

    "In parallel, another part of the team explored generative image synthesis, aiming to imagine tapestry scenes that historians believe once existed but no longer survive. After ruling out SinGAN (good at texture, but structurally incoherent on complex figures) and geometry-aware style transfer (reproduced the fabric texture but not the tapestry's flat, non-realistic visual grammar), the team fine-tuned Stable Diffusion with LoRA adapters — first validating feasibility on SD 1.5 at 512×512, then scaling up to SDXL at 1024×1024 on a dataset of about 150 annotated tapestry crops, trained on the CRIANN's Austral supercomputer. The resulting model reproduces embroidery-like texture and decorative friezes convincingly, though anatomical artifacts (extra limbs, deformed proportions) remain, consistent with imperfections already present in parts of the original work. I contributed to a handful of tasks on this generative track alongside the teammates who led it.",
  ],

  rows: [
    // --- SAM (abandoned) ---
    {
      columns: [
        {
          type: "text",
          heading: "SAM-Based Segmentation — Abandoned",
          body: "Meta's Segment Anything model produced automatic masks for every visually distinct region, but heavily over-segmented the tapestry: a single figure was fragmented into multiple masks tied to sub-parts and surrounding motifs or background fabric, making reliable object reconstruction impractical at the tapestry's resolution.",
        },
        {
          type: "image",
          src: "/images/projects/greyc-bayeux/sam-segmentation.png",
          caption: "SAM segmentation output on a tapestry scene — fine but incoherent fragmentation.",
          alt: "Bayeux Tapestry scene with SAM segmentation overlay",
        },
      ],
    },

    // --- Canny edge detection ---
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/greyc-bayeux/canny-edge-detection.jpeg",
          caption: "Canny edge detection output — dominant graphic structures isolated from the textile background.",
          alt: "Canny edge detection result on a tapestry scene",
        },
        {
          type: "text",
          heading: "Contour-Based Segmentation (Canny)",
          body: "Canny edge detection, followed by morphological operations to reinforce shape continuity and suppress noise, proved far better suited to the tapestry: it highlights dominant graphic structures while naturally limiting segmentation of the plain textile background, forming the basis for the adopted pipeline.",
        },
      ],
    },

    // --- Bounding box aggregation ---
    {
      columns: [
        {
          type: "text",
          heading: "Dynamic Bounding Box Aggregation",
          body: "Contour detection initially yields many local bounding boxes, often several per object where contours are discontinuous or partially occluded by adjacent motifs. A configurable aggregation step regroups these fragments over several passes using spatial proximity, overlap, and relative size, with small leftover boxes merged into nearby larger objects — reconstructing coherent, comparable objects without relying on any semantic model.",
        },
        {
          type: "image",
          src: "/images/projects/greyc-bayeux/bounding-box-aggregation.jpeg",
          caption: "Bounding boxes before aggregation — fragments later regrouped into coherent objects.",
          alt: "Tapestry scene with many small red bounding boxes before aggregation",
        },
      ],
    },

    // --- Image rights note ---
    {
      columns: [
        {
          type: "note",
          body: "Due to image rights around the Bayeux Tapestry's photographic reproduction, most of the report's original figures could not be redistributed here. The images shown on this page are limited to the three segmentation figures above (public-domain source digitization), a partial view of the coverage chart, and a screenshot of the live search interface that I captured separately from the report.",
        },
      ],
    },

    // --- CLIP similarity search & generalization ---
    {
      columns: [
        {
          type: "text",
          heading: "Similarity Search & Generalization",
          body: "Normalized tiles are encoded with CLIP's image tower into a shared feature space, enabling similarity search for motifs — a posture, a horse, a building — regardless of where or at what scale they appear. The pipeline generalizes to other tapestries (from Rollon and Pirou) through configuration changes alone, and reached an average bounding-box coverage of 83.84% across the Bayeux dataset.",
        },
        {
          type: "image",
          src: "/images/projects/greyc-bayeux/coverage-slice.jpeg",
          caption: "Partial view of the sorted per-image coverage chart, showing only the lower-coverage tail — most images actually cluster closer to the 83.84% mean.",
          alt: "Bar chart slice showing the lowest-coverage images from the segmentation coverage metric",
        },
      ],
    },

    // --- Web interface ---
    {
      columns: [
        {
          type: "image",
          src: "/images/projects/greyc-bayeux/webpage.jpeg",
          caption: "Live search interface — text-based search for \"bateau\" (boat), returning visually matching tiles across the tapestry.",
          alt: "Screenshot of the Bayeux Tapestry search web interface showing results for a boat search query",
        },
        {
          type: "text",
          heading: "Web Interface",
          body: "The existing search web interface was extended to support multiple tapestries and multi-format tiles, plus a boost/ban voting mechanism letting users flag which results are relevant to a given query, independent of the query itself.",
        },
      ],
    },

    // --- Generative track (short, other subteam) ---
    {
      columns: [
        {
          type: "text",
          heading: "Generative Image Synthesis (Parallel Track)",
          body: "A separate part of the team explored generating plausible tapestry scenes that no longer survive, ruling out SinGAN and geometry-aware style transfer before fine-tuning Stable Diffusion with LoRA adapters — scaling from SD 1.5 (512×512) up to SDXL (1024×1024) on a ~150-image annotated dataset, trained on the CRIANN's Austral supercomputer. Results reproduced the embroidery texture and decorative friezes convincingly, with some anatomical artifacts remaining. This track was primarily led by other teammates; I contributed to a handful of tasks within it.",
        },
      ],
    },
  ],

  team: [
    {
      name: "Vinícius Giovani Moreira Nascimento",
      role: "Segmentation Pipeline & Visual Similarity Search",
    },
    {
      name: "Baptiste Machard",
      role: "Project Co-Author",
    },
    {
      name: "Imane El Ouatili",
      role: "Project Co-Author",
    },
    {
      name: "Oussama Aqebli",
      role: "Project Co-Author",
    },
    {
      name: "Anatole Conrad",
      role: "Project Co-Author",
    },
  ],

  institutions: [
    {
      name: "ENSICAEN",
    },
    {
      name: "GREYC Research Laboratory (CNRS)",
    },
    {
      name: "Bayeux Museum",
    },
  ],

  highlights: [
    "Diagnosed and abandoned SAM-based segmentation after it badly over-segmented tapestry figures at high resolution",
    "Designed a Canny-edge-based segmentation pipeline with dynamic, multi-pass bounding-box aggregation",
    "Normalized segmented objects into fixed-size tiles with preserved aspect ratio and full traceability to the source image",
    "Integrated CLIP-based visual similarity search over the segmented, normalized tiles",
    "Generalized the pipeline to two additional tapestries (Rollon and Pirou) via configuration alone, reaching 83.84% average coverage",
    "Extended the existing search web interface with multi-tapestry support and a boost/ban relevance-voting system",
    "Contributed to select tasks on the generative image track (Stable Diffusion + LoRA fine-tuning)",
  ],

  links: {
    report: "",
  },
};

export default detail;