import { steps } from '../../data/timeline';
import useTimelineProgress from '../../hooks/useTimelineProgress';
import MaskHeading from '../MaskHeading';
import TimelineStep from './TimelineStep';

export default function HowWeWork() {
  const { wrapRef, lineRef, stepRefs, activeIndex } = useTimelineProgress(steps.length);

  return (
    <section id="how-we-work" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">HOW WE WORK</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-navy leading-tight">
            <MaskHeading>Eight steps. One accountable partner.</MaskHeading>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative" ref={wrapRef}>
          <div className="absolute left-6 top-0 bottom-0 w-px bg-line" />
          <div ref={lineRef} className="absolute left-6 top-0 w-px bg-accent tl-line" style={{ height: '100%' }} />
          <div className="space-y-12">
            {steps.map((step, i) => {
              const status = i === activeIndex ? 'tl-active' : i < activeIndex ? 'tl-done' : '';
              return (
                <TimelineStep
                  key={step.n}
                  step={step}
                  status={status}
                  delay={`${i * 0.08}s`}
                  positionRef={stepRefs[i]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
