import type { ProjectDetail } from "./types";

const detail: ProjectDetail = {
  slug: "crypto-university-labs",

  fullDescription: [
    "This project brings together Cryptography coursework taken across the double-degree program between the University of Brasília (UnB) and ENSICAEN, spanning three distinct courses: a hands-on secure-communication assignment at UnB, a lab-heavy Advanced Cryptography course at ENSICAEN, and a purely theoretical introductory Cryptography course, also at ENSICAEN.",

    "The UnB Computational Security course (Segurança Computacional, 2024) included a secure-communication assignment implementing RSA and AES from scratch in Python, covering key generation, OAEP padding for RSA, AES encryption/decryption, and digital signature verification — a modular implementation combining symmetric and asymmetric cryptography into a single authenticated communication flow.",

    "The ENSICAEN Advanced Cryptography course (Cryptographie Avancée, S9, 2025) went considerably further, with 32 hours split between lecture and 20 hours of hands-on TP, across five practical labs: algebraic structures and the discrete logarithm problem, elliptic curves and ECDSA over P-256, X.509 certificate parsing combined with binary-field elliptic curves (B-163), Bitcoin block and transaction verification on secp256k1, and side-channel attacks (SPA and CPA) against AES and elliptic-curve scalar multiplication. The course's official syllabus covers elliptic curves over prime and binary fields, the Montgomery curve, low-cost cryptography, side-channel and fault attacks, and random number generation.",

    "The ENSICAEN Cryptography course (Cryptographie, S7) was purely theoretical, with 15 hours of lecture, 3 hours of TD, and no TP. It covered symmetric and asymmetric cryptography, hash functions, block cipher modes of operation (ECB, CBC, CTR), DES, AES, RC4, RSA, Diffie-Hellman, the discrete logarithm problem, integer factorization, and digital signatures, including DSS, blind signatures, and the Chaum protocol.",
  ],

  rows: [
    // --- UnB: Computational Security ---
    {
      columns: [
        {
          type: "text",
          heading: "UnB — Computational Security (Segurança Computacional, 2024)",
          body: "A secure-communication assignment implementing RSA and AES from scratch in Python, organized into modular components: random key generation, AES encryption/decryption, RSA key generation with OAEP padding, and a signature scheme where a message is AES-encrypted and the hash of the ciphertext is signed with RSA — combining symmetric and asymmetric cryptography into a single authenticated communication flow, driven by a command-line menu.",
        },
      ],
    },

    // --- ENSICAEN: Advanced Cryptography ---
    {
      columns: [
        {
          type: "text",
          heading: "ENSICAEN — Advanced Cryptography (Cryptographie Avancée, 2025)",
          body: "Five practical labs building up from algebraic foundations to real-world protocols: a unified group interface over ℤp and binary fields 𝔽₂ⁿ with a generic Montgomery Ladder, Diffie-Hellman checks, and discrete logarithm solvers (trial multiplication and Baby-Step Giant-Step); elliptic curve arithmetic and ECDSA over the standardized P-256 curve, validated against NIST test vectors and OpenSSL-generated keys; X.509 certificate parsing and ECDSA signature verification over P-384 alongside a binary-field elliptic curve implementation (B-163); parsing and verifying real Bitcoin block headers and P2PKH transactions, including Merkle root reconstruction and ECDSA verification on secp256k1; and side-channel attacks — Simple Power Analysis (SPA) recovering a secret scalar from a double-and-add trace, and Correlation Power Analysis (CPA) recovering a full AES key from power traces using a Hamming-weight leakage model.",
        },
      ],
    },

    // --- ENSICAEN: Cryptography (theory only) ---
    {
      columns: [
        {
          type: "text",
          heading: "ENSICAEN — Cryptography (Cryptographie, 2025)",
          body: "A theory-only course with no TP, covering the broader landscape of modern cryptography: symmetric and asymmetric encryption, hash function construction, block cipher modes of operation (ECB, CBC, CTR), DES and AES, the RC4 stream cipher, RSA and ElGamal, Diffie-Hellman key exchange, the discrete logarithm problem, integer factorization, and digital signature schemes including DSS, blind signatures, and the Chaum protocol.",
        },
      ],
    },

    // --- Availability note ---
    {
      columns: [
        {
          type: "note",
          body: "The GitHub link above covers the five ENSICAEN Advanced Cryptography labs. The UnB RSA/AES assignment was published separately, in the Cryptography-Cybersec repository. The ENSICAEN Cryptography course had no TP and produced no code — it's included here for completeness, as its theoretical foundation underpins the labs from both other courses.",
        },
      ],
    },
  ],

  team: [
    {
      name: "Vinícius Giovani Moreira Nascimento",
      role: "Cryptography Labs & Coursework",
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
    "Implemented RSA and AES from scratch in Python, including OAEP padding and a combined encrypt-then-sign authenticated communication scheme (UnB)",
    "Built a unified group interface over ℤp and 𝔽₂ⁿ with a generic Montgomery Ladder, Diffie-Hellman, and discrete logarithm solvers, including Baby-Step Giant-Step (ENSICAEN)",
    "Implemented elliptic curve arithmetic and ECDSA over P-256, validated against NIST test vectors and OpenSSL interoperability (ENSICAEN)",
    "Parsed real X.509 certificates and verified ECDSA signatures over P-384, alongside a binary-field elliptic curve implementation (B-163) (ENSICAEN)",
    "Verified real Bitcoin block headers and P2PKH transactions, including Merkle root reconstruction and ECDSA verification on secp256k1 (ENSICAEN)",
    "Recovered secret keys via side-channel attacks: Simple Power Analysis on scalar multiplication and Correlation Power Analysis on AES (ENSICAEN)",
    "Studied the theoretical foundations of symmetric/asymmetric cryptography, hash functions, cipher modes, and digital signature schemes (ENSICAEN)",
  ],

  links: {
    report: "",
  },
};

export default detail;