import type { ProjectDetail } from "./types";

const detail: ProjectDetail = {
  slug: "os-university-labs",

  fullDescription: [
    "This project brings together Operating Systems coursework taken twice across two degrees, plus a Parallel Computing course, forming a broader systems-programming track spanning the double-degree program between the University of Brasília (UnB) and ENSICAEN.",

    "The ENSICAEN Operating Systems course (Systèmes d'exploitation, 2025) focused on system programming under UNIX/Linux and maps directly onto five practical labs, all published in the same repository: process creation and management with fork() and exec(), inter-process communication through POSIX signals and anonymous pipes, multithreaded computation with POSIX threads, and shared-memory synchronization — each lab isolating one IPC or concurrency mechanism and applying it to a concrete problem, from plotting mathematical functions to simulating a drink dispenser's control panel.",

    "The UnB Operating Systems course (ENE0091, 2024) went further into process scheduling and synchronization theory, applied through three additional labs: a Round-Robin CPU scheduling simulator, a paging lab modeling virtual-to-physical address translation, and an implementation of the classic Dining Philosophers problem using semaphores and mutexes to resolve deadlock and starvation in concurrent resource sharing. Its broader theoretical foundation covered multitasking systems, I/O management, memory management, disk and file management, distributed operating systems, and the structure and operation of modern OS kernels.",

    "The ENSICAEN Parallel Architectures course (2025) shifted focus to the hardware side of parallel computing — classifying architectures by execution model and memory structure — and to shared-memory programming with OpenMP, through four labs in C and C++: an introduction to OpenMP's core mechanisms (parallel regions, data scope, synchronization), parallelization of forall-type loops with vectorization and brute-force search, parallelization of recursive algorithms using parallel sections and tasks, and porting a distributed-memory sorting algorithm to a shared-memory model using C++ template programming.",
  ],

  rows: [
    // --- ENSICAEN: Operating Systems ---
    {
      columns: [
        {
          type: "text",
          heading: "ENSICAEN — Operating Systems (Système d'exploitation, 2025)",
          body: "Five standalone labs under UNIX/Linux, each isolating one process-management or IPC mechanism: process creation and management with fork()/exec() to drive Gnuplot rendering; POSIX signals (SIGALRM, SIGCHLD) coordinating periodic data generation between child processes; an anonymous-pipe pipeline filtering prime numbers; POSIX threads distributing matrix multiplication workload; and shared-memory synchronization simulating the control panel of a drink dispenser, including password handling and valve activation.",
        },
      ],
    },

    // --- UnB: Operating Systems Theory & Scheduling ---
    {
      columns: [
        {
          type: "text",
          heading: "UnB — Network Operating Systems (Sistemas Operacionais de Rede, 2024)",
          body: "A more theory-driven course covering multitasking systems, I/O management, memory management, disk and file management, distributed operating systems, and the structure of modern OS kernels. Applied through three labs: a Round-Robin CPU scheduling simulator, a paging lab modeling virtual-to-physical address translation, and an implementation of the Dining Philosophers problem using semaphores and mutexes to resolve deadlock and starvation in concurrent resource sharing.",
        },
      ],
    },

    // --- ENSICAEN: Parallel Architectures ---
    {
      columns: [
        {
          type: "text",
          heading: "ENSICAEN — Parallel Architectures (Architectures Parallèles, 2025)",
          body: "Coursework on the hardware side of parallel computing — classifying architectures by execution model and memory structure — paired with shared-memory programming in OpenMP across four labs: core OpenMP mechanisms (parallel regions, data scope, synchronization); parallelization of forall-type loops with vectorization and a brute-force search algorithm; parallelization of recursive algorithms via parallel sections and tasks; and porting a distributed-memory sorting algorithm to a shared-memory model using C++ template programming.",
        },
      ],
    },

    // --- Availability note ---
    {
      columns: [
        {
          type: "note",
          body: "The Round-Robin, paging, and Dining Philosophers labs (UnB), along with the OpenMP labs (ENSICAEN), were all completed as part of coursework but were never published to a public repository — their code isn't currently available. The GitHub link above covers the five ENSICAEN systems-programming labs only.",
        },
      ],
    },
  ],

  team: [
    {
      name: "Vinícius Giovani Moreira Nascimento",
      role: "Systems Programming Coursework & Labs",
    },
  ],

  institutions: [
    {
      name: "University of Brasília (UnB)",
    },
    {
      name: "ENSICAEN",
    },
  ],

  highlights: [
    "Completed Operating Systems coursework twice across two degrees, at UnB and ENSICAEN, each with a distinct emphasis",
    "Implemented process creation, IPC, threading, and shared-memory synchronization labs in C under UNIX/Linux (ENSICAEN)",
    "Built a Round-Robin CPU scheduling simulator and a virtual memory paging lab (UnB)",
    "Solved the classic Dining Philosophers synchronization problem using semaphores and mutexes (UnB)",
    "Studied the theoretical foundations of multitasking, I/O, memory, disk/file, and distributed operating systems (UnB)",
    "Completed four OpenMP labs on shared-memory parallel programming in C and C++, from parallel regions to distributed-to-shared memory algorithm porting (ENSICAEN)",
  ],

  links: {
    report: "",
  },
};

export default detail;