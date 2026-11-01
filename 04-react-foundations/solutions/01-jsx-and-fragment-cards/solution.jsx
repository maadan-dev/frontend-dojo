import React from 'react';

/**
 * Master Solution: Drill 01 — JSX Architecture, Fragments & Props Composition
 */

export function ModelCard({ modelName = 'Default Model', provider, children }) {
  return (
    <div className="model-card">
      <h3>{modelName}</h3>
      {provider && <span className="provider-tag">{provider}</span>}
      <div className="card-body">{children}</div>
    </div>
  );
}

export function ModelComparison({ modelA, modelB }) {
  return (
    <>
      {modelA}
      {modelB}
    </>
  );
}
