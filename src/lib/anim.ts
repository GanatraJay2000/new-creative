export const anim = (variants: any, custom?: any) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        transition: variants.transition,
        custom: custom,
        variants,
    };
};
