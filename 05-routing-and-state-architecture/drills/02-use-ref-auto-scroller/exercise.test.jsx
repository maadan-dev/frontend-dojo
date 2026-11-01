import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AutoScrollChat } from './exercise.jsx';

describe('Drill 02: Direct DOM Manipulation & Auto-Scrolling with useRef', () => {
  it('attaches ref to bottom sentinel and calls scrollIntoView on message change', () => {
    // Mock scrollIntoView in jsdom
    const scrollIntoViewMock = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    const initial = [{ id: '1', text: 'Hello' }];
    const { rerender } = render(<AutoScrollChat messages={initial} />);

    expect(screen.getByTestId('bottom-sentinel')).toBeInTheDocument();
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

    // Append new message
    scrollIntoViewMock.mockClear();
    rerender(
      <AutoScrollChat
        messages={[
          { id: '1', text: 'Hello' },
          { id: '2', text: 'Streaming token 1' },
        ]}
      />
    );

    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
  });
});
