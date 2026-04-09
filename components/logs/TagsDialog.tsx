import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose } from "../ui/dialog";
import { Divider } from "../ui/divider";
import { Input } from "../ui/input";
import { useState, KeyboardEvent, useEffect } from "react";
import { Tag } from "../ui/tag";
const DEFAULT_TAGS = [
  "work",
  "friends",
  "family",
  "health",
  "learning",
  "travel",
  "food",
  "fitness",
  "creative",
  "personal",
];
const TagsDialog = ({
  setSelectedTags,
}: {
  setSelectedTags: (tags: string[]) => void;
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [customTags, setCustomTags] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState("");
  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const addCustomTag = () => {
    const tag = customInput.trim().toLowerCase();
    if (tag && !customTags.includes(tag) && !DEFAULT_TAGS.includes(tag)) {
      setCustomTags((prev) => [...prev, tag]);
      setTags((prev) => [...prev, tag]);
    }
    setCustomInput("");
  };

  const handleCustomKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addCustomTag();
    }
  };
  useEffect(() => {
    setSelectedTags(tags);
  }, [tags, setSelectedTags]);

  return (
    <Dialog
      trigger={
        <button
          type="button"
          className="flex items-center cursor-pointer  gap-1 text-xs text-secondary hover:text-primary transition-colors"
        >
          <Plus size={14} />
          Add tags
        </button>
      }
      title="Tags"
      description="Select from suggestions or add your own."
    >
      <div className="flex flex-wrap gap-2">
        {DEFAULT_TAGS.map((t) => (
          <Tag
            key={t}
            selected={tags.includes(t)}
            onClick={() => toggleTag(t)}
            className="cursor-pointer"
          >
            {t}
          </Tag>
        ))}
      </div>
      {customTags.length > 0 && (
        <>
          <Divider className="my-2" />
          <div className="flex flex-wrap gap-2">
            {customTags.map((t) => (
              <Tag
                key={t}
                selected={tags.includes(t)}
                onClick={() => toggleTag(t)}
                className="cursor-pointer"
              >
                {t}
              </Tag>
            ))}
          </div>
        </>
      )}
      <div className="flex gap-2">
        <Input
          variant="ghost"
          className="border-b border-border rounded-none flex-1 px-0 text-sm"
          placeholder="Custom tag..."
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          onKeyDown={handleCustomKeyDown}
        />
        <Button
          type="button"
          variant="secondary"
          onClick={addCustomTag}
          disabled={!customInput.trim()}
        >
          Add
        </Button>
      </div>
      <DialogClose render={<Button className="w-full">Done</Button>} />
    </Dialog>
  );
};
export default TagsDialog;
