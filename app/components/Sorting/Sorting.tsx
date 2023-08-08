// components/Sorting/Sorting.tsx
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnimations } from "../../redux/reducers/sortReducer";
import { selectionSort } from "../../algo/selectionSort";
import { bubbleSort } from "../../algo/bubbleSort";
import { insertionSort } from "../../algo/insertionSort";
import { mergeSort } from "../../algo/mergeSort";
import { quickSort } from "../../algo/quickSort";
import { heapSort } from "../../algo/heapSort";
import { RootState } from "../../redux/store";

const sortFunctions = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
};

const someDuration = 500;

const highlightElements = (i: number, j: number) => {
  const elements = document.querySelectorAll(".array-element") as NodeListOf<HTMLElement>;
  if (elements[i] && elements[j]) {
    elements[i].style.backgroundColor = "red";
    elements[j].style.backgroundColor = "red";
  }
  
};

const shouldSwap = (i: number, j: number) => {
  const elements = document.querySelectorAll(".array-element") as NodeListOf<HTMLElement>;
  if (!elements[i] || !elements[j]) return false;
  return parseInt(elements[i].style.height) > parseInt(elements[j].style.height);
};

const animateSwap = (i: number, j: number) => {
  const elements = document.querySelectorAll(
    ".array-element"
  ) as NodeListOf<HTMLElement>;
  const heightI = elements[i].style.height;
  const heightJ = elements[j].style.height;

  elements[i].style.height = heightJ;
  elements[j].style.height = heightI;
};

const resetHighlight = (i: number, j: number) => {
  const elements = document.querySelectorAll(".array-element") as NodeListOf<HTMLElement>;
  if (!elements[i] || !elements[j]) return;
  elements[i].style.backgroundColor = "blue";
  elements[j].style.backgroundColor = "blue";
};

const Sorting = () => {
  const dispatch = useDispatch();
  const array = useSelector((state: RootState) => state.sort.array);
  const sortAlgorithm = useSelector(
    (state: RootState) => state.sort.sortAlgorithm
  );
  const animations = useSelector((state: RootState) => state.sort.animations);

  useEffect(() => {
    if (animations.length > 0) {
      const [i, j] = animations[0];
      highlightElements(i, j);
      setTimeout(() => {
        if (shouldSwap(i, j)) {
          animateSwap(i, j);
        }
        resetHighlight(i, j);
      }, someDuration);
    }
  }, [animations]);

  useEffect(() => {
    if (sortAlgorithm) {
      const animations = sortFunctions[sortAlgorithm](array);
      console.log(sortAlgorithm, animations);
      dispatch(setAnimations(animations));
    }
  }, [sortAlgorithm, array, dispatch]);

  useEffect(() => {
    if (Array.isArray(animations)) {
      animations.forEach((animation, index: number) => {
        if (!Array.isArray(animation) || animation.length !== 2) return;
        const [i, j] = animation;
        setTimeout(() => {
          highlightElements(i, j);
          if (shouldSwap(i, j)) {
            animateSwap(i, j);
          }
          setTimeout(() => {
            resetHighlight(i, j);
          }, someDuration);
        }, index * 100);
      });
    }
  }, [animations]);

  return <div></div>;
};
export default Sorting;
