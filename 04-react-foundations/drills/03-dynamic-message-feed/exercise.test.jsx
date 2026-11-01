import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MessageFeed } from './exercise.jsx';

describe('Drill 03: Dynamic Message Feed & The Reconciliation Key Prop', () => {
  it('renders empty feed state when initialMessages is empty', () => {
    render(<MessageFeed initialMessages={[]} />);
    expect(screen.getByTestId('empty-feed')).toHaveTextContent(
      'No messages in conversation.'
    );
  });

  it('renders list of messages with sender and content', () => {
    const list = [
      { id: '1', sender: 'User', text: 'Explain transformers' },
      { id: '2', sender: 'AI', text: 'Transformers use self-attention' },
    ];
    render(<MessageFeed initialMessages={list} />);

    expect(screen.getByTestId('msg-1')).toHaveTextContent('Explain transformers');
    expect(screen.getByTestId('msg-2')).toHaveTextContent('Transformers use self-attention');
  });

  it('deletes message immutably from state when delete button clicked', () => {
    const list = [
      { id: '1', sender: 'User', text: 'Msg 1' },
      { id: '2', sender: 'AI', text: 'Msg 2' },
    ];
    render(<MessageFeed initialMessages={list} />);

    fireEvent.click(screen.getByTestId('delete-1'));

    expect(screen.queryByTestId('msg-1')).not.toBeInTheDocument();
    expect(screen.getByTestId('msg-2')).toBeInTheDocument();
  });
});
