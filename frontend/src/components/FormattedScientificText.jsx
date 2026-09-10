import React from "react";

// Binomial species (genus + specific epithet)
const BINOMIALS = [
  "Pseudomonas fluorescens",
  "Bacillus subtilis",
  "Bacillus velezensis",
  "Bacillus thuringiensis",
  "Serratia marcescens",
  "Metarhizium anisopliae",
  "Metarhizium robertsii",
  "Beauveria bassiana",
  "Cordyceps fumosorosea",
  "Verticillium lecanii",
  "Isaria fumosorosea",
  "Streptomyces thermovulgaris",
  "Geobacillus thermocatenulatus",
  "Trichoderma harzianum",
  "Enterobacter sacchari",
  "Ganoderma boninense",
  "Ascophyllum nodosum",
];

// Genera followed by sp. or spp. (where only the genus is italicized)
const GENERA_WITH_SP = [
  "Trichoderma",
  "Streptomyces",
  "Ganoderma",
  "Fusarium",
  "Oryctes",
];

// Standalone genus names
const STANDALONE_GENERA = [
  "Phytophthora",
  "Phytoptora",
  "Pythium",
  "Trichoderma",
  "Pseudomonas",
  "Bacillus",
  "Streptomyces",
  "Metarhizium",
  "Beauveria",
  "Verticillium",
  "Isaria",
  "Serratia",
  "Ganoderma",
  "Fusarium",
  "Oryctes",
  "Cordyceps",
  "Geobacillus",
  "Enterobacter",
  "Ascophyllum",
];

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const binomialsPattern = BINOMIALS.map(escapeRegex).join("|");
const spGeneraPattern = GENERA_WITH_SP.map(escapeRegex).join("|");
const standalonePattern = STANDALONE_GENERA.map(escapeRegex).join("|");

const SCIENTIFIC_REGEX = new RegExp(
  `\\b(${binomialsPattern})\\b|\\b(${spGeneraPattern})\\s+(sp\\.|spp\\.)|\\b(${standalonePattern})\\b`,
  "g"
);

/**
 * Parses a string and wraps recognized scientific bacterial/fungal genus and species names in <em> tags.
 * Preserves standard nomenclature: genus and species are italicized, 'sp.' remains regular.
 */
export function formatScientificText(text) {
  if (typeof text !== "string") return text;
  if (!text) return "";

  const parts = [];
  let lastIndex = 0;
  let match;

  SCIENTIFIC_REGEX.lastIndex = 0;
  while ((match = SCIENTIFIC_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Full binomial species: italicize both genus & species
      parts.push(
        <em key={`b-${match.index}`} className="italic not-italic:font-normal font-inherit">
          {match[1]}
        </em>
      );
    } else if (match[2]) {
      // Genus + sp.: italicize genus only
      parts.push(
        <React.Fragment key={`sp-${match.index}`}>
          <em className="italic not-italic:font-normal font-inherit">{match[2]}</em> {match[3]}
        </React.Fragment>
      );
    } else if (match[4]) {
      // Standalone genus: italicize genus
      parts.push(
        <em key={`g-${match.index}`} className="italic not-italic:font-normal font-inherit">
          {match[4]}
        </em>
      );
    }

    lastIndex = SCIENTIFIC_REGEX.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function FormattedScientificText({ text }) {
  return <>{formatScientificText(text)}</>;
}
