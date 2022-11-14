#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("clean-create", {
  templateRoot,
  defaultPackageManager: "npm",
  promptForDescription: false,
  promptForAuthor: false,
  promptForEmail: false,
  promptForLicense: false,
  defaultLicense: "UNLICENSED",
  promptForPackageManager: false,
  skipGitInit: true,
  defaultTemplate: "default",
  promptForTemplate: true,
});
