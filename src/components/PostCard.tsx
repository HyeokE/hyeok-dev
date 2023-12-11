import Link from 'next/link';
import CONFIG from 'morethan-log.config';
import { formatDate } from '@/src/libs/utils';
import Tag from './Tag';
import type { TPost } from '../types';
import imageLoader from '@/src/libs/next/imageLoader';
import Image from 'next/image';
import { getTheme } from '@hooks/useThemeEffect';
import React from 'react';
type Props = {
  post: TPost;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const theme = getTheme();
  if (post.thumbnail) {
    return null;
  }
  return (
    <Link href={`/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="overflow-hidden mb-6 md:mb-8 rounded-2xl bg-white dark:bg-zinc-700 transition-shadow hover:shadow-lg"
        >
          <div className="relative w-full pb-[66%] lg:pb-[50%] bg-gray-200 dark:bg-zinc-700 ">
            <Image
              src={`https://thumbnail.hyeok.dev/${post.title}.png?subTitle=&theme=${theme}&md=1&fontSize=100px&images=https%3A%2F%2Fthumbnail.hyeok.dev%2Fassets%2FblogIcon.svg`}
              className="object-cover"
              width={990}
              height={654}
              loader={imageLoader}
              layout="fill"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              alt={post.title}
            />
          </div>

          <div className="p-4">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
                {post.title}
              </h2>
            </header>
            <div className="mb-4">
              <time className="flex-shrink-0 text-sm text-gray-600 dark:text-gray-400 ">
                {formatDate(post?.date?.start_date || post.createdTime, CONFIG.lang)}
              </time>
            </div>
            <main className="mb-4">
              <p className="hidden leading-8 text-gray-700 dark:text-gray-300 line-clamp-2">
                {post.summary}
              </p>
            </main>
            <div className="flex gap-2">
              {post.tags && post.tags.map((tag: string, idx: number) => <Tag key={idx}>{tag}</Tag>)}
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
