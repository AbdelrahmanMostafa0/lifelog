import { Drawer } from "@base-ui/react";

const DesignSystemPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <h1 className="text-display">This heading</h1>
      <p className="text-body">This paragraph</p>
      <button className="btn btn-primary">This button</button>
      <button className="btn btn-secondary">This button</button>
      <button className="btn btn-tertiary">This button</button>
      <div className="tag">This tag</div>
      <div className="tag tag-selected">This tag</div>
      <input type="text" className="input" placeholder="This input" />
      <div className="input-group">
        <input type="text" className="input" placeholder="This input" />
      </div>
      <div className="card">This card</div>
      <div className="label">This label</div>
      <div className="divider">This divider</div>
      <a href="#" className="nav-link">
        This nav link
      </a>
      <a href="#" className="nav-link" aria-current="page">
        This nav link
      </a>
      <div className="text-danger">This text</div>
      <div className="border-danger border p-2">This border</div>
      <Drawer.Root swipeDirection="down">
        <Drawer.Trigger className="btn btn-primary">Open drawer</Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Backdrop className="fixed inset-0 bg-black/40" />

          <Drawer.Viewport className="fixed inset-x-0 bottom-0 flex justify-center">
            <Drawer.Popup className="w-full bg-[var(--color-surface)] border-t border-[var(--color-border)] rounded-t-xl shadow-lg ">
              {/* drag handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-[var(--color-border)]" />
              </div>

              <Drawer.Content className="flex flex-col gap-4 p-6">
                <Drawer.Title className="font-display italic text-title text-[var(--color-text-primary)]">
                  Drawer
                </Drawer.Title>
                <Drawer.Description className="text-body text-[var(--color-text-secondary)]">
                  This is a drawer that slides in from the bottom. Swipe down to
                  dismiss.
                </Drawer.Description>
                <div className="flex justify-end">
                  <Drawer.Close className="btn btn-secondary">
                    Close
                  </Drawer.Close>
                </div>
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default DesignSystemPage;
