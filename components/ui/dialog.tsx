"use client";
import { Dialog as BaseDialog } from "@base-ui/react";
import * as React from "react";

interface DialogProps {
  trigger: React.ReactElement;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Dialog({ trigger, title, description, children }: DialogProps) {
  return (
    <BaseDialog.Root>
      <BaseDialog.Trigger render={trigger} />

      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="fixed inset-0 bg-black/40" />

        <BaseDialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-surface border border-border rounded-xl shadow-lg p-6 flex flex-col gap-4">
          <BaseDialog.Title className="font-display italic text-title text-primary">
            {title}
          </BaseDialog.Title>
          {description && (
            <BaseDialog.Description className="text-body text-secondary">
              {description}
            </BaseDialog.Description>
          )}
          {children}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}

export const DialogClose = BaseDialog.Close;
