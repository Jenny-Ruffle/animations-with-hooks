import { Component } from "react";
import { RendererProvider } from "react-fela";
import { createRenderer } from "fela";
import webPreset from "fela-preset-web";

function getFelaRenderer() {
  return createRenderer({
    plugins: [...webPreset]
  });
}

const fallbackRenderer = getFelaRenderer();

export default class FelaProvider extends Component {
  render() {
    const renderer = this.props.renderer || fallbackRenderer;
    return (
      <RendererProvider renderer={renderer}>
        {this.props.children}
      </RendererProvider>
    );
  }
}
