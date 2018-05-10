"use strict";
const path = require("path");
const { h, Text } = require("ink");
const SelectInput = require("ink-select-input");
const opn = require("opn");
const terminalImage = require("terminal-image");

const open = url => opn(url, { wait: false });

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: "Website",
    url: "https://adamyonk.com",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/adamyonk",
  },
  {
    label: "GitHub",
    url: "https://github.com/adamyonk",
  },
  {
    label: "Reddit",
    url: "https://reddit.com/u/adamyonk",
  },
  {
    label: "Ask Me Anything",
    url: "https://github.com/adamyonk/ama",
  },
  // TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
  {
    label: "Quit",
    action() {
      process.exit(); // eslint-disable-line unicorn/no-process-exit
    },
  },
];

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>
        {
          "☕️🏍 Pursuer of God and @oliviayonk, thinker, motorcyclist, caffiend, recovering perfectionist, engineer at @AppOptics. I love to make the complex simple."
        }
      </Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
