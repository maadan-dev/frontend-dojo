import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ModelCard, ModelComparison } from './exercise.jsx';

describe('Drill 01: JSX Architecture, Fragments & Props Composition', () => {
  it('ModelCard renders name, optional provider, and children', () => {
    render(
      <ModelCard modelName="Gemini 3.8 Flash" provider="Google DeepMind">
        <p>Ultra-low latency inference</p>
      </ModelCard>
    );

    expect(screen.getByText('Gemini 3.8 Flash')).toBeInTheDocument();
    expect(screen.getByText('Google DeepMind')).toBeInTheDocument();
    expect(screen.getByText('Ultra-low latency inference')).toBeInTheDocument();
  });

  it('ModelCard uses default prop for modelName', () => {
    render(<ModelCard />);
    expect(screen.getByText('Default Model')).toBeInTheDocument();
  });

  it('ModelComparison returns two top-level ModelCards wrapped in a Fragment', () => {
    const { container } = render(
      <ModelComparison
        modelA={<ModelCard modelName="Model A" />}
        modelB={<ModelCard modelName="Model B" />}
      />
    );

    const cards = container.querySelectorAll('.model-card');
    expect(cards.length).toBe(2);
    // Ensure no intermediate wrapper div was created outside the cards
    expect(container.firstChild.className).toBe('model-card');
  });
});
