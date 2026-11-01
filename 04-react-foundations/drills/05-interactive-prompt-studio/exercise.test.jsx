import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PromptStudio } from './exercise.jsx';

describe('Drill 05: Controlled Form Inputs & Event Handling', () => {
  it('updates input value and reflects dynamic character count', () => {
    render(<PromptStudio onSubmitPrompt={() => {}} />);
    const input = screen.getByTestId('prompt-input');

    expect(input.value).toBe('');
    expect(screen.getByTestId('char-count')).toHaveTextContent('0 / 200');

    fireEvent.change(input, { target: { value: 'Analyze metrics' } });
    expect(input.value).toBe('Analyze metrics');
    expect(screen.getByTestId('char-count')).toHaveTextContent('15 / 200');
  });

  it('disables submit button when input is empty or whitespace', () => {
    render(<PromptStudio onSubmitPrompt={() => {}} />);
    const btn = screen.getByTestId('submit-btn');
    const input = screen.getByTestId('prompt-input');

    expect(btn).toBeDisabled();

    fireEvent.change(input, { target: { value: '   ' } });
    expect(btn).toBeDisabled();

    fireEvent.change(input, { target: { value: 'Valid prompt' } });
    expect(btn).not.toBeDisabled();
  });

  it('submits trimmed prompt and resets input field', () => {
    const handleSubmit = vi.fn();
    render(<PromptStudio onSubmitPrompt={handleSubmit} />);

    const input = screen.getByTestId('prompt-input');
    const form = screen.getByTestId('prompt-form');

    fireEvent.change(input, { target: { value: '  Generate code  ' } });
    fireEvent.submit(form);

    expect(handleSubmit).toHaveBeenCalledWith('Generate code');
    expect(input.value).toBe('');
    expect(screen.getByTestId('char-count')).toHaveTextContent('0 / 200');
  });
});
