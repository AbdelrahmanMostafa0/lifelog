import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Divider } from "@/components/ui/divider";
import { Drawer, DrawerClose } from "@/components/ui/drawer";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tag } from "@/components/ui/tag";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="flex flex-col gap-4">
    <div>
      <Label>{title}</Label>
      <Divider style={{ marginBlock: "var(--spacing-2)" }} />
    </div>
    {children}
  </section>
);

const DesignSystemPage = () => {
  return (
    <div className="flex flex-col gap-12 p-8 max-w-lg mx-auto">
      <div>
        <h1 className="text-display font-display italic">Design System</h1>
        <p className="text-body text-secondary">Lifelog component library</p>
      </div>

      <Section title="Typography">
        <h1>Display — Playfair Display</h1>
        <h2>Title — Playfair Display</h2>
        <h3>Body Large — DM Sans</h3>
        <p>Body — DM Sans. The quick brown fox jumps over the lazy dog.</p>
        <Label>Label — DM Mono uppercase</Label>
        <span className="text-meta text-secondary font-mono">
          Meta — DM Mono 0.75rem
        </span>
      </Section>

      <Section title="Colors">
        <div className="flex flex-wrap gap-2">
          {[
            ["bg-accent", "Accent"],
            ["bg-accent-light", "Accent Light"],
            ["bg-surface border border-[var(--color-border)]", "Surface"],
          ].map(([cls, label]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 rounded-md ${cls}`} />
              <span className="text-meta text-secondary">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="danger">Danger</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="secondary" disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Tags">
        <div className="flex flex-wrap gap-2">
          <Tag>Mood</Tag>
          <Tag>Sleep</Tag>
          <Tag selected>Exercise</Tag>
          <Tag selected>Nutrition</Tag>
        </div>
      </Section>

      <Section title="Inputs">
        <Input type="text" placeholder="Text input" />
        <Input
          type="text"
          placeholder="Search…"
          icon={
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          }
        />
        <Textarea rows={3} placeholder="Textarea" />
      </Section>

      <Section title="Alerts">
        <Alert variant="info">
          <strong>Info:</strong>&nbsp;Your log has been saved.
        </Alert>
        <Alert variant="success">
          <strong>Success:</strong>&nbsp;Goal achieved for today.
        </Alert>
        <Alert variant="warning">
          <strong>Warning:</strong>&nbsp;You haven&apos;t logged today.
        </Alert>
        <Alert variant="danger">
          <strong>Error:</strong>&nbsp;Something went wrong.
        </Alert>
      </Section>

      <Section title="Card">
        <Card>
          <Label style={{ marginBottom: "var(--spacing-2)" }}>Oct 4, 2026</Label>
          <h2>Morning reflection</h2>
          <p>Feeling focused and ready to tackle the day ahead.</p>
          <div className="flex gap-2" style={{ marginTop: "var(--spacing-4)" }}>
            <Tag selected>Mood</Tag>
            <Tag>Sleep</Tag>
          </div>
        </Card>
      </Section>

      <Section title="Navigation">
        <nav className="flex gap-4">
          <a href="#" className="nav-link">Today</a>
          <a href="#" className="nav-link" aria-current="page">Log</a>
          <a href="#" className="nav-link">Goals</a>
        </nav>
      </Section>

      <Section title="Drawer">
        <Drawer
          trigger={<Button variant="secondary">Open drawer</Button>}
          title="Add entry"
          description="How are you feeling today? Swipe down to dismiss."
        >
          <div className="flex justify-end gap-2">
            <DrawerClose className="btn btn-tertiary">Cancel</DrawerClose>
            <DrawerClose className="btn btn-primary">Save</DrawerClose>
          </div>
        </Drawer>
      </Section>

      <Section title="Dialog">
        <Dialog
          trigger={<Button variant="secondary">Open dialog</Button>}
          title="Confirm action"
          description="Are you sure you want to delete this entry? This cannot be undone."
        >
          <div className="flex justify-end gap-2">
            <DialogClose className="btn btn-tertiary">Cancel</DialogClose>
            <DialogClose className="btn btn-danger">Delete</DialogClose>
          </div>
        </Dialog>
      </Section>
    </div>
  );
};

export default DesignSystemPage;
