import { projects } from '../../lib/data.js'
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const projectItem = projects.find((projectItem) => projectItem.slug === params.slug);

  if (!projectItem) {
    throw error(404);
  }

  return {
    projectItem
  };
}