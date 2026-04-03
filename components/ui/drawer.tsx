"use client";
import { Drawer as BaseDrawer } from "@base-ui/react";
import * as React from "react";

interface DrawerProps {
  trigger: React.ReactElement;
  title: string;
  description?: string;
  children: React.ReactNode;
  swipeDirection?: "down" | "up" | "left" | "right";
}

export function Drawer({
  trigger,
  title,
  description,
  children,
  swipeDirection = "down",
}: DrawerProps) {
  return (
    <BaseDrawer.Root swipeDirection={swipeDirection}>
      <BaseDrawer.Trigger render={trigger} />

      <BaseDrawer.Portal>
        <BaseDrawer.Backdrop className="fixed inset-0 bg-black/40" />

        <BaseDrawer.Viewport className="fixed inset-x-0 bottom-0 flex justify-center">
          <BaseDrawer.Popup className="w-full bg-surface border-t border-border rounded-t-xl shadow-lg">
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-border" />
            </div>

            <BaseDrawer.Content className="flex flex-col gap-4 p-6">
              <BaseDrawer.Title className="font-display italic text-title text-primary">
                {title}
              </BaseDrawer.Title>
              {description && (
                <BaseDrawer.Description className="text-body text-secondary">
                  {description}
                </BaseDrawer.Description>
              )}
              {children}
            </BaseDrawer.Content>
          </BaseDrawer.Popup>
        </BaseDrawer.Viewport>
      </BaseDrawer.Portal>
    </BaseDrawer.Root>
  );
}

export const DrawerClose = BaseDrawer.Close;
