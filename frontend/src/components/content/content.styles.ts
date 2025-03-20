import { css } from "lit";

export const contentStyles = css`
  .main-content {
    flex: 1;
    display: grid;
    grid-template-columns: 80% 20%;
    width: 75%;
    max-width: 75rem;
    min-width: 60rem;
    margin: 4rem auto 6rem auto;
    padding: 2rem;
  }

  .expansion-sidebar {
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .expansion {
    background-color: transparent;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.2s ease-in-out;
    color: var(--color-main-bluegrey);
    border: 1px solid var(--color-lighter-bluegrey);
  }

  .expansion:active {
    transform: scale(0.95);
  }

  .expansion-label {
    display: flex;
    padding: 0.75rem 0.75rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    font-size: 0.875rem;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }

  .left-buttons {
    display: flex;
    gap: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: var(--color-main-bluegrey);
    box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  }

  .save-button {
    background-color: var(--color-gold);
    display: none;
  }

  .save-button:hover {
    background-color: #d8c49a;
  }

  .filter-button {
    background-color: transparent;
    color: var(--color-main-bluegrey);
    box-shadow: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    padding: 0.75rem 1rem;
  }

  .filter-button:hover {
    background-color: transparent;
  }

  button:hover {
    background-color: var(--color-lighter-bluegrey);
  }

  button:active {
    transform: scale(0.95);
  }

  .panel-heading {
    margin: 0 0 0.75rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-main-bluegrey);
  }

  .filter-options {
    background-color: var(--color-very-light-bluegrey);
    border-radius: 8px;
    border: 1px solid var(--color-very-light-bluegrey-border);
    padding: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    display: none;
  }

  .filter-options.open {
    display: block;
  }

  .filter-options-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .filter-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .filter-option-label {
    font-size: 0.9rem;
    color: var(--color-main-bluegrey);
    cursor: pointer;
  }

  .filter-panels-row {
    display: none;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  .filter-panels-row.open {
    display: flex;
  }

  .left-panel, .right-panel {
    background-color: var(--color-very-light-bluegrey);
    border-radius: 8px;
    border: 1px solid var(--color-very-light-bluegrey-border);
    padding: 1.25rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    box-sizing: border-box;
  }

  .left-panel {
    flex: 0 0 40%;
  }

  .right-panel {
    flex: 1;
  }

  .filter-options p {
    margin: 0;
    color: var(--color-dark);
    font-size: 0.9rem;
  }

  .divider {
    border-top: 1px solid var(--color-medium);
    margin: 2rem 0 2rem;
  }

  .kingdom-space {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  .checkbox {
    accent-color: var(--color-main-bluegrey);
  }

  .checkbox:hover {
    cursor: pointer;
  }

  .accordion {
    background-color: transparent;
    margin-top: 1rem;
  }

  .accordion-header {
    font-size: 0.875rem;
    cursor: pointer;
    color: var(--color-lighter-bluegrey);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    transition: transform 0.2s ease-in-out;
    padding: 0.75rem 0.75rem;
  }

  .accordion-header:hover {
    background-color: transparent;
  }

  .accordion-header:active {
    transform: scale(0.95);
  }

  .accordion-content {
    overflow: hidden;
    max-height: 0;
  }

  .accordion-content.open {
    max-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 0.5rem;
  }

  .inputs-row {
    display: flex;
    gap: 1.25rem;
    width: 100%;
  }

  .slider-row {
    justify-content: flex-start;
  }

  .input-group, .slider-group {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .input-group {
    flex: 1;
    max-width: calc(50% - 0.625rem);
  }

  .slider-group {
    min-width: 100%;
  }

  .input-label {
    font-size: 0.9rem;
    color: var(--color-main-bluegrey);
    font-weight: 500;
    height: 1.25rem;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .number-input {
    width: 100%;
    padding: 0.625rem 0.75rem;
    border: 1px solid #e0e6ec;
    border-radius: 6px;
    font-size: 0.9rem;
    color: var(--color-main-bluegrey);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;
    height: 2.5rem;
  }

  .number-input:focus {
    outline: none;
    border-color: var(--color-main-bluegrey);
    box-shadow: 0 0 0 3px rgba(var(--color-main-bluegrey-rgb, 100, 130, 150), 0.1);
  }

  .slider-input {
    width: 100%;
    padding: 0.75rem 0;
    height: 6px;
    position: relative;
    background: transparent;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
  }

  .slider-input::-webkit-slider-runnable-track {
    background: linear-gradient(to right, 
      var(--color-main-bluegrey) 0%, 
      var(--color-main-bluegrey) calc(var(--value, 2) / 6 * 100%), 
      var(--color-lighter-bluegrey) calc(var(--value, 2) / 6 * 100%), 
      var(--color-lighter-bluegrey) 100%);
    height: 6px;
    border-radius: 6px;
    width: 100%;
  }

  .slider-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color-main-bluegrey);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin-top: -7px;
  }

  /* Firefox support */
  .slider-input::-moz-range-track {
    background: var(--color-lighter-bluegrey);
    height: 6px;
    border-radius: 6px;
  }

  .slider-input::-moz-range-progress {
    background: var(--color-main-bluegrey);
    height: 6px;
    border-radius: 6px;
  }

  .slider-input::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color-main-bluegrey);
    cursor: pointer;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .slider-input:hover {
    opacity: 0.9;
  }

  .value-display {
    font-weight: 600;
    color: var(--color-main-bluegrey);
    margin-left: 0.25rem;
  }

  .exclusions-panel {
    background-color: var(--color-very-light-bluegrey);
    border-radius: 8px;
    border: 1px solid var(--color-very-light-bluegrey-border);
    padding: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    display: none;
  }

  .exclusions-panel.open {
    display: block;
  }

  .exclusions-divider {
    height: 1px;
    background-color: #e0e6ec;
    margin: 1rem 0;
    width: 100%;
  }
`;